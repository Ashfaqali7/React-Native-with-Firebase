import React from 'react';
import {View, Text} from 'react-native';
import CameraScreen from './screens/camera';
import CustomCamera from './screens/customecamera';
import Login from './screens/login';
import MapScreen from './screens/mapscreen';

function App() {
  return (
    <>
      {/* <CustomCamera /> */}
      <MapScreen />
    </>
  );
}
export default App;
