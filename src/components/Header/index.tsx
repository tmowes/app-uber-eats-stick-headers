import React from 'react'

import { useSafeArea } from 'react-native-safe-area-context'
import TabHeader from './TabHeader'
import {
  Container,
  HeaderBackground,
  HeaderContent,
  HeaderTitle,
  BackIconView,
  BackIcon,
  FavIcon,
} from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ tabs }) => {
  const insets = useSafeArea()
  const { top: paddingTop } = insets

  return (
    <Container style={{ paddingTop }}>
      <HeaderBackground />
      <HeaderContent>
        <BackIconView>
          <BackIcon color="black" />
        </BackIconView>
        <HeaderTitle>Miss Miu Europaallee</HeaderTitle>
        <FavIcon color="white" />
      </HeaderContent>
      <TabHeader {...{ tabs }} />
    </Container>
  )
}

export default Header
