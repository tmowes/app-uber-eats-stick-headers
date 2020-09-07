import React from 'react'

import { Container, Title, InfoView, RatingsView, StarIcon } from './styles'

const RestaurantRating: React.FC = () => {
  return (
    <Container>
      <Title>$$ • Asiatisch • Koreanisch • Japanisch</Title>
      <InfoView>
        <Title>Opens at 11:30 AM</Title>
        <RatingsView>
          <StarIcon />
          <Title>(186)</Title>
        </RatingsView>
      </InfoView>
    </Container>
  )
}

export default RestaurantRating
