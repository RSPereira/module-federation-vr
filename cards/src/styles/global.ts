import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`

export const widths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
