import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

const PADDING = 16
export const MIN_HEADER_HEIGHT = 45

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const HeaderBackground = styled.View``

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${PADDING}px;
  height: ${MIN_HEADER_HEIGHT}px;
`

export const HeaderTitle = styled.Text`
  flex: 1;
  font-size: 18px;
  margin-left: ${PADDING}px;
`

export const BackIconView = styled.View``

export const BackIcon = styled(Icon).attrs({
  name: 'arrow-left',
  size: 24,
})``

export const FavIcon = styled(Icon).attrs({
  name: 'heart',
  size: 24,
})``
