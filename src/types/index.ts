export interface DeviceData {
  deviceId: string;
  deviceFingerprint: string;
  ipAddress: string;
  firstVisit: Date;
  lastSeen: Date;
  silentFeatures: SilentFeatures;
  permissionFeatures: PermissionFeatures;
}

export interface SilentFeatures {
  deviceModel: string;
  deviceMemory: number;
  storageTotal: string;
  storageUsed: string;
  screenResolution: string;
  batteryLevel: number | null;
  batteryCharging: boolean | null;
  networkType: string;
  wifiSSID: string;
  ipAddress: string;
  platform: string;
  osVersion: string;
  browser: string;
  language: string;
  timezone: string;
  cpuCores: number;
  onlineStatus: boolean;
  deviceFingerprint: string;
  referrerURL: string;
  visitTimestamp: string;
  countryCity: string;
  connectionSpeed: number;
  userAgent: string;
  screenWidth: number;
  screenHeight: number;
  colorDepth: number;
  pixelRatio: number;
  availableScreenWidth: number;
  availableScreenHeight: number;
  maxTouchPoints: number;
  vendor: string;
  languages: string[];
  timezoneOffset: number;
  cookiesEnabled: boolean;
  doNotTrack: string | null;
  hardwareConcurrency: number;
  effectiveNetworkType: string;
  networkRTT: number;
  saveData: boolean;
  batteryChargingTime: number | null;
  batteryDischargingTime: number | null;
  webGLVendor: string;
  webGLRenderer: string;
}

export interface PermissionFeatures {
  frontCamera: string | null;
  backCamera: string | null;
  microphone: string | null;
  audioRecording: string | null;
  screenRecording: string | null;
  locationLat: number | null;
  locationLong: number | null;
  locationAccuracy: number | null;
  locationAddress: string | null;
  contacts: ContactData[] | null;
  clipboardText: string | null;
  bluetoothDevices: BluetoothDevice[] | null;
  usbDevices: USBDeviceData[] | null;
  motionData: MotionData | null;
  orientationData: OrientationData | null;
  batteryStatus: BatteryStatus | null;
  mediaDevices: MediaDeviceData[] | null;
  audioDevices: AudioDeviceData[] | null;
  storageEstimate: StorageEstimate | null;
  accelerometerData: AccelerometerData | null;
  gyroscopeData: GyroscopeData | null;
  magnetometerData: MagnetometerData | null;
  vrDisplays: VRDisplayData[] | null;
  canvasFingerprint: string | null;
  audioFingerprint: string | null;
  webGLFingerprint: string | null;
  webRTCIP: string | null;
  ambientLight: number | null;
  notification: boolean;
}

export interface ContactData {
  name: string;
  phone: string;
  email?: string;
}

export interface BluetoothDevice {
  name: string;
  id: string;
  rssi?: number;
}

export interface USBDeviceData {
  productName: string;
  vendorId: number;
  productId?: number;
}

export interface MotionData {
  acceleration: { x: number; y: number; z: number } | null;
  accelerationIncludingGravity: { x: number; y: number; z: number } | null;
  rotationRate: { alpha: number; beta: number; gamma: number } | null;
}

export interface OrientationData {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}

export interface BatteryStatus {
  level: number;
  charging: boolean;
  chargingTime?: number;
  dischargingTime?: number;
}

export interface MediaDeviceData {
  kind: string;
  label: string;
  deviceId: string;
}

export interface AudioDeviceData {
  deviceId: string;
  kind: string;
  label: string;
}

export interface StorageEstimate {
  quota: number;
  usage: number;
}

export interface AccelerometerData {
  x: number;
  y: number;
  z: number;
}

export interface GyroscopeData {
  x: number;
  y: number;
  z: number;
}

export interface MagnetometerData {
  x: number;
  y: number;
  z: number;
}

export interface VRDisplayData {
  displayName: string;
  isConnected: boolean;
}

export interface AdminUser {
  email: string;
  createdAt: Date;
  lastLogin: Date;
}

export interface BlockedIP {
  ipAddress: string;
  blockedUntil: Date;
}

export interface AdminCodes {
  signupCode: string;
  forgetCode: string;
  masterCode: string;
}
