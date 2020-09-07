/* eslint-disable no-console */
import React from 'react'

import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'
import { StyleSheet, Dimensions } from 'react-native'
import { ImageProps } from './types'
import backgroundImage from '../../../assets/background.jpeg'

const { height: wHeight, width: wWidth } = Dimensions.get('window')

export const HEADER_IMAGE_HEIGHT = wHeight / 3

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wWidth,
    resizeMode: 'cover',
    height: HEADER_IMAGE_HEIGHT,
  },
})

const HeaderImage: React.FC<ImageProps> = ({ y }) => {
  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP,
  })
  console.log({ height })
  return (
    <Animated.Image
      source={backgroundImage}
      style={[styles.image, { height }]}
    />
  )
}

export default HeaderImage
