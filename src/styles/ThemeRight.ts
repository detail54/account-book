import {
  DefaultTheme,
  TColor,
  TFontColor,
  TFontSize,
  TFontWeight,
  TSize,
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
  titleSize: calcRem(48),
}

const fontWeight: Record<TSize, TFontWeight> = {
  xs: 100,
  sm: 200,
  md: 300,
  lg: 400,
  xl: 500,
}

const buttonWidth: Record<TSize, string> = {
  xs: calcRem(60),
  sm: calcRem(75),
  md: calcRem(100),
  lg: calcRem(125),
  xl: calcRem(150),
}

const buttonHeight: Record<TSize, string> = {
  xs: calcRem(25),
  sm: calcRem(27),
  md: calcRem(29),
  lg: calcRem(31),
  xl: calcRem(35),
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
  xs: calcRem(8),
  sm: calcRem(10),
  md: calcRem(12),
  lg: calcRem(14),
  xl: calcRem(16),
}

const margins: Record<TSize<'zero'>, string> = {
  zero: '0',
  xs: calcRem(8),
  sm: calcRem(10),
  md: calcRem(12),
  lg: calcRem(14),
  xl: calcRem(16),
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
}

const fontColors: Record<TFontColor, string> = {
  themeColor: '#000000',
  grey: '#808080',
  white: '#fff',
  black: '#000000',
}

const backgroundColor = '#fff'

const theme: DefaultTheme = {
  calcRem,
  fontSizes,
  fontWeight,
  buttonWidth,
  buttonHeight,
  breakPoint,
  paddings,
  margins,
  colors,
  fontColors,
  backgroundColor,
}

export default theme
