import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import backgroundImage from '../../assets/background.jpeg'

const { height: wHeight, width: wWidth } = Dimensions.get('window')

export const HEADER_IMAGE_HEIGHT = wHeight / 3

export const Container = styled.View``

export const Image = styled.Image.attrs({
  source: backgroundImage,
  resizeMode: 'cover',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: ${wWidth}px;
  height: ${HEADER_IMAGE_HEIGHT}px;
`
