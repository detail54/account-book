import { atom } from 'recoil'
import { ATOM_KEYS } from 'store'

export const themeState = atom<boolean>({
  key: ATOM_KEYS.IS_DARK_THEME,
  default: false,
})

export const selectDashBoardDateState = atom<number>({
  key: ATOM_KEYS.SELECT_DASHBOARD_DATE,
  default: 1,
})
