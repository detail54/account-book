import {
  DefaultTheme,
  TColor,
  TFontColor,
  TFontSize,
  TFontWeight,
  TSize,
  TTitleSize,
} from 'styled-components'

const calcRem = (size: number) => `${size / 16}rem`

const fontSizes: Record<TFontSize, string> = {
  xxs: calcRem(10),
  xs: calcRem(13.6),
  small: calcRem(13.6),
  base: calcRem(16),
  large: calcRem(19.2),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(32),
}

const titleSizes: Record<TTitleSize, string> = {
  h1: calcRem(40),
  h2: calcRem(38),
  h3: calcRem(36),
  h4: calcRem(34),
  h5: calcRem(32),
  h6: calcRem(30),
}

const fontWeight: Record<TSize, TFontWeight> = {
  xs: 100,
  sm: 200,
  md: 300,
  lg: 400,
  xl: 500,
  big: 600,
}

const buttonWidth: Record<TSize, string> = {
  xs: calcRem(60),
  sm: calcRem(75),
  md: calcRem(100),
  lg: calcRem(125),
  xl: calcRem(150),
  big: '100%',
}

const buttonHeight: Record<TSize, string> = {
  xs: calcRem(25),
  sm: calcRem(27),
  md: calcRem(29),
  lg: calcRem(31),
  xl: calcRem(35),
  big: calcRem(38),
}

const breakPoint: Record<TSize, string> = {
  xs: '0',
  sm: calcRem(576),
  md: calcRem(786),
  lg: calcRem(992),
  xl: calcRem(1200),
}

const paddings: Record<TSize<'zero'>, string> = {
  zero: '0',
  xxxs: calcRem(2),
  xxs: calcRem(5),
  xs: calcRem(8),
  sm: calcRem(10),
  md: calcRem(12),
  lg: calcRem(14),
  xl: calcRem(16),
  big: calcRem(30),
}

const margins: Record<TSize<'zero'>, string> = {
  zero: '0',
  xxxs: calcRem(2),
  xxs: calcRem(5),
  xs: calcRem(8),
  sm: calcRem(10),
  md: calcRem(12),
  lg: calcRem(14),
  xl: calcRem(16),
  big: calcRem(30),
}

const gaps: Record<TSize, string> = {
  xs: calcRem(1),
  sm: calcRem(2),
  md: calcRem(3),
  lg: calcRem(4),
  xl: calcRem(5),
}

const colors: Record<TColor, string> = {
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
  themeColor: '#000000',
}

const fontColors: Record<TFontColor, string> = {
  themeColor: '#000000',
  grey: '#808080',
  white: '#fff',
  black: '#000000',
  red: '#e03131',
  blue: '#228be6',
}

const backgroundColor = '#fff'
const subBackgroundColor: Record<number, string> = {
  0: '#eeeeee',
  1: '#e6e6e6',
  2: '#ddd',
  3: '#c9c9c9',
}

const boxShadow =
  '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);'

const theme: DefaultTheme = {
  calcRem,
  fontSizes,
  titleSizes,
  fontWeight,
  buttonWidth,
  buttonHeight,
  breakPoint,
  paddings,
  margins,
  gaps,
  colors,
  fontColors,
  backgroundColor,
  subBackgroundColor,
  boxShadow,
}

export default theme
