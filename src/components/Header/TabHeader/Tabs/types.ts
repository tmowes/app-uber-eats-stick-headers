import { TabModel } from '../types'

export interface TabsProps {
  tabs: TabModel[]
  active?: boolean
  onMeasurement?: (index: number, measurement: number) => void
  onPress?: (index: number) => void
}
