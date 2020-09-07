import React, { useState } from 'react'
import { useValues, onScroll } from 'react-native-redash'

import Animated from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { Container } from './styles'
import Header from '../../components/Header'
import { defaultTabs } from './data'
import MenuItems from './MenuItems'
import HeaderImage from './HeaderImage'

const Dashboard: React.FC = () => {
  const [tabs, setTabs] = useState(defaultTabs)
  const [y] = useValues([0], [])

  return (
    <Container style={{ flex: 1 }}>
      <HeaderImage {...{ y }} />
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        onScroll={onScroll({ y })}
      >
        <MenuItems
          onMeasurement={(index, tab) => {
            tabs[index] = tab
            setTabs([...tabs])
          }}
        />
      </Animated.ScrollView>
      <Header {...{ tabs }} />
    </Container>
  )
}

export default Dashboard
