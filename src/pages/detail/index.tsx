import React, { useCallback } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
// hook
import useAccount from 'hooks/useAccount'
import useIncome from 'hooks/useIncome'
import useDashBoard from 'hooks/useDashBoard'
import useDate from 'hooks/useDate'
// type
import { IAccount, IIncome } from 'config/interface'
import { TListContents } from 'components/organisms/list/List'
// store
import { useRecoilState } from 'recoil'
import { detailModalState, selectDashBoardDateState } from 'store/atoms'
// style
import DetailStyles from './Detail.styles'
// components
const List = dynamic(() => import('components/organisms/list/List'))
const Title = dynamic(() => import('components/atoms/title/Title'))
const Text = dynamic(() => import('components/atoms/text/Text'))
const LinkButton = dynamic(() => import('components/atoms/button/LinkButton'))
const DetailModal = dynamic(
  () => import('components/templates/modal/DetailModal'),
)

const Detail: NextPage<AppProps> = () => {
  const { Wrap, Section, ListItemContentWrap, ListItemContent } = DetailStyles
  const [detailModalData, setDetailModalData] = useRecoilState(detailModalState)
  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)

  const { format } = useDate(new Date(selectDate))
  const { getAccount } = useAccount()
  const { getIncome } = useIncome()
  const { getDashBoardData } = useDashBoard()

  const { data: accountData } = getAccount(selectDate)
  const { data: incomeData } = getIncome(selectDate)
  const { data: dashBoardData } = getDashBoardData(format('YYYY-MM'))

  const incomeItemNames: Record<keyof Omit<IIncome, 'id'>, string> = {
    incomeDt: '시간',
    amount: '금액',
    memo: '비고',
  }
  const accountItemNames: Record<keyof Omit<IAccount, 'id'>, string> = {
    paymentDt: '결제시간',
    category: '분류',
    store: '가맹점',
    amount: '금액',
    memo: '비고',
  }

  const onChangeSelectDate = useCallback(
    (date: string) => setSelectDate(date),
    [],
  )

  const handleChangeData = (data: IAccount | IIncome) => {
    const { id } = data
    setDetailModalData({
      ...detailModalData,
      content: data,
    })
  }

  const handleCloseModal = useCallback(() => {
    setDetailModalData({
      open: false,
      header: '',
      content: undefined,
    })
  }, [])

  const calendarListData: TListContents[] | undefined =
    dashBoardData &&
    dashBoardData.list.map((account, index) => {
      return {
        itemNumber: index + 1 < 10 ? `0${index + 1}` : index + 1,
        numberWidth: 30,
        content: (
          <ListItemContentWrap>
            <ListItemContent>
              <Text
                text={`+ ${account.income.toLocaleString()}`}
                fontColor='blue'
              />
            </ListItemContent>
            <ListItemContent>
              <Text
                text={`- ${account.expenditure.toLocaleString()}`}
                fontColor='red'
              />
            </ListItemContent>
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        hover: true,
        active: account.date === selectDate,
        onClick: () => onChangeSelectDate(account.date),
      }
    })

  const incomeListData: TListContents[] | undefined =
    incomeData &&
    incomeData.map((income, index) => {
      const incomeDt = new Date(income.incomeDt)
      return {
        itemNumber: index + 1,
        numberWidth: 15,
        content: (
          <ListItemContentWrap>
            <Text
              text={`${incomeDt.getHours() >= 12 ? '오후' : '오전'} ${
                incomeDt.getHours() < 10
                  ? `0${incomeDt.getHours()}`
                  : incomeDt.getHours()
              }:${
                incomeDt.getMinutes() < 10
                  ? `0${incomeDt.getMinutes()}`
                  : incomeDt.getMinutes()
              }`}
              flex={1}
              fontSize='small'
            />
            <Text
              text={income.amount.toLocaleString()}
              flex={1}
              fontSize='small'
            />
            <Text text={income.memo || ''} flex={2} fontSize='small' />
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
        hover: true,
        onClick: () => {
          setDetailModalData({
            open: true,
            header: '수익 상세',
            content: income,
          })
        },
      }
    })

  const expenditureListData: TListContents[] | undefined =
    accountData &&
    accountData.map((account, index) => {
      const paymentDt = new Date(account.paymentDt)
      return {
        itemNumber: index + 1,
        numberWidth: 15,
        content: (
          <ListItemContentWrap>
            <Text
              text={`${paymentDt.getHours() >= 12 ? '오후' : '오전'} ${
                paymentDt.getHours() < 10
                  ? `0${paymentDt.getHours()}`
                  : paymentDt.getHours()
              }:${
                paymentDt.getMinutes() < 10
                  ? `0${paymentDt.getMinutes()}`
                  : paymentDt.getMinutes()
              }`}
              flex={1}
              fontSize='small'
            />
            <Text text={account.category} flex={1} fontSize='small' />
            <Text text={account.store} flex={1} fontSize='small' />
            <Text
              text={account.amount.toLocaleString()}
              flex={1}
              fontSize='small'
            />
            <Text text={account.memo || ''} flex={2} fontSize='small' />
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
        hover: true,
        onClick: () => {
          setDetailModalData({
            open: true,
            header: '지출 상세',
            content: account,
          })
        },
      }
    })

  return (
    <Wrap>
      <Section>
        <Title text={selectDate} type='H3' />
        <List
          type='List'
          listItemType='NumberListItem'
          contents={calendarListData}
          height={585}
          boxShadow
        />
        <LinkButton size='big' text='내역 추가' link='write' marginY='lg' />
      </Section>
      <Section>
        <Title text='수익' type='H3' />
        <List
          type='List'
          listItemType='NumberListItem'
          header={{
            content: (
              <ListItemContentWrap>
                <Text
                  text={incomeItemNames.incomeDt}
                  flex={1}
                  fontSize='small'
                />
                <Text text={incomeItemNames.amount} flex={1} fontSize='small' />
                <Text text={incomeItemNames.memo} flex={2} fontSize='small' />
              </ListItemContentWrap>
            ),
            numberWidth: 15,
            paddingY: 'xxs',
            paddingX: 'md',
            bgColorNumber: 1,
          }}
          contents={incomeListData}
          defaultContent={{
            content: '수익 없음',
            paddingY: 'md',
            paddingX: 'md',
            fontSize: 'small',
          }}
          boxShadow
        />
      </Section>
      <Section>
        <Title text='지출' type='H3' />
        <List
          type='List'
          listItemType='NumberListItem'
          header={{
            content: (
              <ListItemContentWrap>
                <Text
                  text={accountItemNames.paymentDt}
                  flex={1}
                  fontSize='small'
                />
                <Text
                  text={accountItemNames.category}
                  flex={1}
                  fontSize='small'
                />
                <Text text={accountItemNames.store} flex={1} fontSize='small' />
                <Text
                  text={accountItemNames.amount}
                  flex={1}
                  fontSize='small'
                />
                <Text text={accountItemNames.memo} flex={2} fontSize='small' />
              </ListItemContentWrap>
            ),
            numberWidth: 15,
            paddingY: 'xxs',
            paddingX: 'md',
            bgColorNumber: 1,
          }}
          contents={expenditureListData}
          defaultContent={{
            content: '지출 없음',
            paddingY: 'md',
            paddingX: 'md',
            fontSize: 'small',
          }}
          boxShadow
        />
      </Section>
      {detailModalData.open && (
        <DetailModal
          open={detailModalData.open}
          header={detailModalData.header}
          data={detailModalData.content}
          incomeItemNames={incomeItemNames}
          accountItemNames={accountItemNames}
          handleChangeData={handleChangeData}
          onClose={handleCloseModal}
        />
      )}
    </Wrap>
  )
}

export default Detail
