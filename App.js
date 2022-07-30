/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getImage} from './Redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const [selectImage, setSelectImage] = useState();
  const [text, setText] = useState();
  const [visible, setVisible] = useState(false);
  const {images} = useSelector(state => state.imageReducer);

  useEffect(() => {
    dispatch(getImage());
  }, []);

  const setImage = (string_url, img_text) => {
    setSelectImage(string_url);
    setVisible(true);
    setText(img_text);
  };

  const closeImage = () => {
    setSelectImage('');
    setVisible(false);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {images.map(item => (
          <View style={styles.imagebox} key={item.image}>
            <TouchableHighlight onPress={() => setImage(item.image, item.name)}>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableHighlight>
          </View>
        ))}
      </View>
      {visible && (
        <View style={styles.selectImageContainer}>
          <View style={styles.box}>
            <TouchableHighlight onPress={() => closeImage()}>
              <Image source={{uri: selectImage}} style={styles.selectImage} />
            </TouchableHighlight>
            <Text style={styles.textStyle}>{text}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  imagebox: {
    margin: 4,
  },
  image: {
    width: 90,
    height: 90,
  },
  selectImageContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectImage: {
    width: 350,
    height: 350,
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    marginTop: 20,
  },
});

export default App;
