import { atom } from 'recoil'
import { ATOM_KEYS } from 'store'

export const themeState = atom<boolean>({
  key: ATOM_KEYS.IS_DARK_THEME,
  default: false,
})

const defaultDate = new Date()
export const selectDashBoardDateState = atom<string>({
  key: ATOM_KEYS.SELECT_DASHBOARD_DATE,
  default: `${defaultDate.getFullYear()}-${
    defaultDate.getMonth() + 1
  }-${defaultDate.getDate()}`,
})
