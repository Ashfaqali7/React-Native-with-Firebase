import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

async function CustomCamera() {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  const microphonePermission = await Camera.getMicrophonePermissionStatus();
  const newCameraPermission = await Camera.requestCameraPermission();
  const newMicrophonePermission = await Camera.requestMicrophonePermission();

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null) return <LoadingView />;
  return <Camera style={StyleSheet.absoluteFill} device={device} />;
}
export default CustomCamera;
