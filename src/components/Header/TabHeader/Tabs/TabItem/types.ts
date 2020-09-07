export interface TabItemProps {
  color: string
  name: string
  onMeasurement?: (measurement: number) => void
  onPress?: () => void
}

export interface TabItemTextProps {
  color: string
}
