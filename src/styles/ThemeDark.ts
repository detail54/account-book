import { DefaultTheme, TColor, TFontColor } from 'styled-components'
import RightTheme from './ThemeRight'

export const colors: Record<TColor, string> = {
  black_1: '#393939',
  black_2: '#2F2F2F',
  black_3: '#212121',
  black_4: '#000000',
  navy_1: '#2D3F64',
  navy_2: '#253557',
  navy_3: '#1A2A4D',
  navy_4: '#14213D',
  orange_1: '#FFBF55',
  orange_2: '#FFB742',
  orange_3: '#FFB02F',
  orange_4: '#FCA311',
  grey_1: '#F6F6F6',
  grey_2: '#F0F0F0',
  grey_3: '#EAEAEA',
  grey_4: '#E5E5E5',
  white: '#fff',
}

const fontColors: Record<TFontColor, string> = {
  themeColor: '#fff',
  grey: '#d9d9d9',
  white: '#fff',
  black: '#000000',
}

const backgroundColor = '#202124'

const theme: DefaultTheme = {
  ...RightTheme,
  colors,
  fontColors,
  backgroundColor,
}

export default theme
