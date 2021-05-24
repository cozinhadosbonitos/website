import styled from 'styled-components'
import { SiteThemeProps } from '../theme'

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Container = styled.div<SiteThemeProps>`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.containerMaxWidth};
  padding: 0px ${({ theme }) => theme.spacings[3]};
  padding-top: 0;
`

export const Row = styled.div<{
  flex: string
  wrap: string
  alignContent: string
  justifyContent: string
  mobile: string
}>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  }
`
export const Column = styled.div<{
  flex: string
  alignContent: string
  justifyContent: string
  margin: string
  width: string
}>`
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`
