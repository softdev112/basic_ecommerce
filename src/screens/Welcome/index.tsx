import React, { useEffect } from 'react';
import { Image } from 'react-native';
import * as Animated from 'react-native-animatable';
import { RootNavProps } from '../../types/RootParamList';
import styles from './styles';

export default function Welcome({ navigation }: RootNavProps<'Welcome'>) {
  useEffect(() => {
    // show splash screen then navigate
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <>
      <Animated.View animation="pulse" style={styles.animation}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </>
  );
}
