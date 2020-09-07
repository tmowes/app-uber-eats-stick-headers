import React, { useState } from 'react'
import { View } from 'react-native'

import Tabs from './Tabs'
import { Container } from './styles'
import { TabHeaderProps } from './types'

const TabHeader: React.FC<TabHeaderProps> = ({ tabs }) => {
  const [measurements, setMeasurements] = useState<number[]>(
    new Array(tabs.length).fill(0),
  )
  const style = {
    borderRadius: 24,
    backgroundColor: 'black',
    width: measurements[0],
    flex: 1,
  }
  return (
    <Container>
      <Tabs
        onMeasurement={(i, m) => {
          measurements[i] = m
          setMeasurements([...measurements])
        }}
        {...{ tabs }}
      />
      <View>
        <View {...{ style }} />
      </View>
      <Tabs
        active
        onPress={i => {
          return true
        }}
        {...{ tabs }}
      />
    </Container>
  )
}

export default TabHeader
