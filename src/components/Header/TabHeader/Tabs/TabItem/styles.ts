import styled, { css } from 'styled-components/native'
import { TabItemTextProps } from './types'

export const Container = styled.TouchableWithoutFeedback``
export const Wrapper = styled.View`
  height: 45px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
export const TabItemText = styled.Text<TabItemTextProps>`
  font-size: 14px;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`
