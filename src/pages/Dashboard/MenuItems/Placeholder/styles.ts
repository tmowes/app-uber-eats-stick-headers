import styled from 'styled-components/native'
import { MIN_HEADER_HEIGHT } from '../../../../components/Header/styles'
import { HEADER_IMAGE_HEIGHT } from '../../styles'

export const Container = styled.View`
  height: ${HEADER_IMAGE_HEIGHT}px;
  margin-bottom: ${MIN_HEADER_HEIGHT}px;
`
