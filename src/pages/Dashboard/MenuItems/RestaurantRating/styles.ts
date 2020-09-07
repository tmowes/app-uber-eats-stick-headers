import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  padding: 16px;
`
export const Title = styled.Text`
  font-size: 14px;
`
export const StarIcon = styled(Icon).attrs({
  name: 'star',
  color: '#f4c945',
  size: 24,
})``

export const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const RatingsView = styled.View`
  flex-direction: row;
  align-items: center;
`
