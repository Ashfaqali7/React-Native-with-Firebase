import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function CameraScreen() {
  const [imageSrc, setImageSrc] = useState('');
  let openCamera = () => {
    launchCamera(
      {
        includeBase64: true,
        saveToPhotos: true,
        mediaType: 'photo',
      },
      e => {
        console.log(e.assets[0].base64);
        setImageSrc('data:image/png;base64,' + e.assets[0].base64);
      },
    );
    // You can also use as a promise without 'callback':
    // const result = await launchCamera(options?);
  };
  let openGallary = () => {
    launchImageLibrary(
      {
        includeBase64: true,
      },
      e => {
        console.log(e);
        // setImageSrc('data:image/png;base64,' + e.assets[0].base64);
      },
    );
  };
  return (
    <>
      <View>
        <Button onPress={() => openCamera()} title="Camera" />
        <Button onPress={() => openGallary()} title="Gallery" />
        {imageSrc && (
          <Image
            source={{
              uri: imageSrc,
            }}
            style={{width: '100%', height: 200}}
          />
        )}
      </View>
    </>
  );
}
export default CameraScreen;
