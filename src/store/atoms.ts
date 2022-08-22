import { atom } from 'recoil'
import { ATOM_KEYS } from 'store'
import { v1 } from 'uuid'

const setKey = (key: string) => {
  return `${key}/${v1()}`
}

export const themeState = atom<boolean>({
  key: setKey(ATOM_KEYS.IS_DARK_MODE),
  default: false,
})

const defaultDate = new Date()
export const selectDashBoardDateState = atom<string>({
  key: setKey(ATOM_KEYS.SELECT_DASHBOARD_DATE),
  default: `${defaultDate.getFullYear()}-${
    defaultDate.getMonth() + 1
  }-${defaultDate.getDate()}`,
})
