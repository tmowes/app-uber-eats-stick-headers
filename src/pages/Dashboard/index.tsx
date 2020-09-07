import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Container, Image } from './styles'
import Header from '../../components/Header'
import { defaultTabs } from './data'
import MenuItems from './MenuItems'

const Dashboard: React.FC = () => {
  const [tabs, setTabs] = useState(defaultTabs)

  return (
    <Container style={{ flex: 1 }}>
      <Image />
      <ScrollView>
        <MenuItems
          onMeasurement={(index, tab) => {
            tabs[index] = tab
            setTabs([...tabs])
          }}
        />
      </ScrollView>
      <Header {...{ tabs }} />
    </Container>
  )
}

export default Dashboard
