/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

declare module 'styled-components' {
  export type TSize<T = string> = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | T
  export type TFontSize =
    | 'xxs'
    | 'xs'
    | 'small'
    | 'base'
    | 'large'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'titleSize'
  export type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600
  export type TFontColor = 'themeColor' | 'grey' | 'white' | 'black'
  export type TColor =
    | 'black_1'
    | 'black_2'
    | 'black_3'
    | 'black_4'
    | 'navy_1'
    | 'navy_2'
    | 'navy_3'
    | 'navy_4'
    | 'orange_1'
    | 'orange_2'
    | 'orange_3'
    | 'orange_4'
    | 'grey_1'
    | 'grey_2'
    | 'grey_3'
    | 'grey_4'
    | 'white'

  export interface ITheme {
    calcRem: (size: number) => string
    fontSizes: Record<TFontSize, string>
    fontWeight: Record<TSize, TFontWeight>
    buttonWidth: Record<TSize, string>
    buttonHeight: Record<TSize, string>
    breakPoint: Record<TSize, string>
    paddings: Record<TSize<'zero'>, string>
    margins: Record<TSize<'zero'>, string>
    colors: Record<TColor, string>
    fontColors: Record<TFontColor, string>
    backgroundColor: string
  }

  export interface IStyleProps {
    fontColor?: TFontColor
    fontSize?: TFontSize
    fontWeight?: TFontWeight
    bgColor?: TColor
    mediaSize?: TSize
    marginX?: TSize<'zero'>
    marginY?: TSize<'zero'>
    paddingX?: TSize<'zero'>
    paddingY?: TSize<'zero'>
  }

  export interface DefaultTheme extends ITheme {}
  export interface IButtonStyleProps extends IStyleProps {
    size: TSize
  }
  export interface IBoareStyleProps extends IStyleProps {
    height: number
  }
}
