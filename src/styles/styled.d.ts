/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

declare module 'styled-components' {
  export type TSize<T = string> =
    | 'xxxs'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'big'
    | T
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
  export type TFontColor =
    | 'themeColor'
    | 'grey'
    | 'white'
    | 'black'
    | 'red'
    | 'blue'
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
    | 'themeColor'
  export type TAlign = 'left' | 'center' | 'right'

  export interface ITheme {
    calcRem: (size: number) => string
    fontSizes: Record<TFontSize, string>
    fontWeight: Record<TSize, TFontWeight>
    buttonWidth: Record<TSize, string>
    buttonHeight: Record<TSize, string>
    breakPoint: Record<TSize, string>
    paddings: Record<TSize<'zero'>, string>
    margins: Record<TSize<'zero'>, string>
    gaps: Record<TSize, string>
    colors: Record<TColor, string>
    fontColors: Record<TFontColor, string>
    backgroundColor: string
    subBackgroundColor: Record<number, string>
    boxShadow: string
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
    flex?: number
  }

  export interface DefaultTheme extends ITheme {}
  export interface IButtonStyleProps extends IStyleProps {
    size?: TSize
    noneBorder?: boolean
  }

  export interface IListStyleProps extends IStyleProps {
    height?: number
    divide?: boolean
    boxShadow?: boolean
  }

  export interface IListItemStyleProps extends IStyleProps {
    bgColorNumber?: number
    cursor?: string
    hover?: boolean
    active?: boolean
    numberFlex?: number
    numberWidth?: number
  }

  export interface IImgButtonStyleProps extends IStyleProps {
    invertImgColor?: boolean
  }

  export interface ITextStyleProps extends IStyleProps {
    flex?: number
  }

  export interface IInputStyleProps extends IStyleProps {
    width?: number | string
    align?: TAlign
    flex?: number
  }

  export interface IBoareStyleProps extends IStyleProps {
    height: number
  }

  export interface IGridStyleProps extends IStyleProps {
    width?: number
    height?: number
    gridColumnsCount: number
    gridRowsCount?: number
    gap?: TSize
  }

  export interface IGridItemStyleProps extends IStyleProps {
    titleAlign?: TAlign
    active?: boolean
    itemPadding?: TSize<'zero'>
  }

  export interface ISkeletonStyleProps extends IStyleProps {
    width?: number | string
    height?: number | string
    borderRadius?: number
  }

  export interface ISelectStyleProps extends IStyleProps {
    width?: number | string
  }

  export interface ICalendarStyleProps extends IStyleProps {
    smallDateSelectBox?: boolean
    height?: number
  }
}
