import React from 'react'

import {
  Container,
  Section,
  Name,
  Item,
  Title,
  Description,
  Price,
} from './styles'
import { MenuItemsProps } from './types'
import { menu } from '../data'
import Placeholder from './Placeholder'
import Divider from './Divider'
import RestaurantInfo from './RestaurantInfo'
import RestaurantRating from './RestaurantRating'

const MenuItems: React.FC<MenuItemsProps> = ({ onMeasurement }) => {
  return (
    <Container>
      <Placeholder />
      <RestaurantRating />
      <Divider />
      <RestaurantInfo />
      <Divider />
      {menu.map(({ name, items: menuItems }, index) => (
        <Section
          key={index}
          onLayout={({
            nativeEvent: {
              layout: { y: anchor },
            },
          }) => onMeasurement(index, { name, anchor: anchor - 142 })}
        >
          <Name>{name}</Name>
          {menuItems.map(({ title, description, price }, itemsIndex) => (
            <Item key={itemsIndex}>
              <Title>{title}</Title>
              <Description numberOfLines={2}>{description}</Description>
              <Price>{price}</Price>
            </Item>
          ))}
        </Section>
      ))}
    </Container>
  )
}

export default MenuItems
