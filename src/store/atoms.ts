import { atom } from 'recoil'
import { ATOM_KEY } from 'store'

export const themeState = atom<boolean>({
  key: ATOM_KEY.IS_DARK_THEME,
  default: false,
})
