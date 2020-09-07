import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
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

export const Image = styled(Animated.Image).attrs({
  source: backgroundImage,
  resizeMode: 'cover',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: ${wWidth}px;
  height: ${HEADER_IMAGE_HEIGHT}px;
`
