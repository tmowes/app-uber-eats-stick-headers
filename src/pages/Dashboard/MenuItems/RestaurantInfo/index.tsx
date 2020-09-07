import React from 'react'

import { Container, Title2, InfoView, Title, TextLink } from './styles'

const RestaurantInfo: React.FC = () => {
  return (
    <Container>
      <Title2>Restaurant info</Title2>
      <InfoView>
        <Title>Europaallee 48, Zürich, Zürich 8004</Title>
        <TextLink>More info</TextLink>
      </InfoView>
    </Container>
  )
}

export default RestaurantInfo
