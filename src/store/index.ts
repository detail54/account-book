import { IAccount, IIncome } from 'config/interface'

export const ATOM_KEYS = {
  IS_DARK_MODE: 'isDarkMode',
  LAST_PAGE: 'lastPage',
  SELECT_DASHBOARD_DATE: 'selectDashboardDate',
  DETAIL_MODAL_DATA: 'detailModalData',
}

export interface IDetailModalDataState {
  open: boolean
  header: string
  content?: IAccount | IIncome
}
