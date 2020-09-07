import React from 'react'

import { Container, Wrapper, TabItemText } from './styles'
import { TabItemProps } from './types'

const TabItem: React.FC<TabItemProps> = ({
  name,
  color,
  onMeasurement,
  onPress,
}) => {
  return (
    <Container {...{ onPress }}>
      <Wrapper
        onLayout={
          onMeasurement
            ? ({
                nativeEvent: {
                  layout: { width },
                },
              }) => onMeasurement(width)
            : undefined
        }
      >
        <TabItemText color={color}>{name}</TabItemText>
      </Wrapper>
    </Container>
  )
}

export default TabItem
