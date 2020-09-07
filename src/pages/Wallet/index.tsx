import React from 'react'
import { Animated, FlatList } from 'react-native'

import { Cards } from '../../components/Card'
import WalletCard from './WalletCard'
import { Container } from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

interface Card {
  type: number
}

const cards: Card[] = [
  {
    type: Cards.Card1,
  },
  {
    type: Cards.Card2,
  },
  {
    type: Cards.Card3,
  },
  {
    type: Cards.Card4,
  },
  {
    type: Cards.Card5,
  },
  {
    type: Cards.Card6,
  },
]

const Wallet: React.FC = () => {
  const y = new Animated.Value(0)
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  })
  return (
    <Container>
      <AnimatedFlatList
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 100 }}
        bounces={false}
        data={cards}
        renderItem={({ index, item: { type } }) => (
          <WalletCard {...{ index, y, type }} />
        )}
        keyExtractor={({ index }: any) => index}
        {...{ onScroll }}
      />
    </Container>
  )
}

export default Wallet
