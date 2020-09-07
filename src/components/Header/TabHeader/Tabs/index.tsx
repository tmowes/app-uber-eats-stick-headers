import React from 'react'

import { Container } from './styles'
import { TabsProps } from './types'
import TabItem from './TabItem'

const Tabs: React.FC<TabsProps> = ({
  tabs,
  active,
  onMeasurement,
  onPress,
}) => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          onMeasurement={
            onMeasurement ? onMeasurement.bind(null, index) : undefined
          }
          color={active ? 'white' : 'black'}
          onPress={onPress ? onPress.bind(null, index) : undefined}
          {...tab}
        />
      ))}
    </Container>
  )
}

export default Tabs
