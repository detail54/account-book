import { NextPage } from 'next'
import React from 'react'
// hook
import useAccount from 'hooks/useAccount'
import useIncome from 'hooks/useIncome'
import useDashBoard from 'hooks/useDashBoard'
import useDate from 'hooks/useDate'
// components
import List, { TListContents } from 'components/organisms/list/List'
import Text from 'components/atoms/text/Text'
// store
import { useRecoilState } from 'recoil'
import { selectDashBoardDateState } from 'store/atoms'
// style
import DetailStyles from './Detail.styles'

const Detail: NextPage = () => {
  const { Wrap, Section, ListItemContentWrap, ListItemContent } = DetailStyles
  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)

  const { format } = useDate(new Date(selectDate))
  const { getAccount } = useAccount()
  const { getIncome } = useIncome()
  const { getDashBoardData } = useDashBoard()

  const { data: accountData } = getAccount(selectDate)
  const { data: incomeData } = getIncome(selectDate)
  const { data: dashBoardData } = getDashBoardData(format('YYYY-MM'))

  const onChangeSelectDate = (date: string) => {
    setSelectDate(date)
  }

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
    incomeData.map((account, index) => {
      const incomeDt = new Date(account.incomeDt)
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
              text={account.amount.toLocaleString()}
              flex={1}
              fontSize='small'
            />
            <Text text={account.memo} flex={2} fontSize='small' />
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
        hover: true,
        onClick: () => {},
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
            <Text text={account.category.name} flex={1} fontSize='small' />
            <Text text={account.store.name} flex={1} fontSize='small' />
            <Text
              text={account.amount.toLocaleString()}
              flex={1}
              fontSize='small'
            />
            <Text text={account.memo} flex={2} fontSize='small' />
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
        hover: true,
        onClick: () => {},
      }
    })

  return (
    <Wrap>
      <Section>
        <Text text={selectDate} type='BoldText' fontSize='xxxl' />
        <List
          type='List'
          listItemType='NumberListItem'
          contents={calendarListData}
          height={600}
          boxShadow
        />
      </Section>
      <Section>
        <Text text='수익' type='BoldText' fontSize='xxxl' />
        <List
          type='List'
          listItemType='NumberListItem'
          header={{
            content: (
              <ListItemContentWrap>
                <Text text='시간' flex={1} fontSize='small' />
                <Text text='금액' flex={1} fontSize='small' />
                <Text text='비고' flex={2} fontSize='small' />
              </ListItemContentWrap>
            ),
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
        <Text text='지출' type='BoldText' fontSize='xxxl' />
        <List
          type='List'
          listItemType='NumberListItem'
          header={{
            content: (
              <ListItemContentWrap>
                <Text text='결제시간' flex={1} fontSize='small' />
                <Text text='분류' flex={1} fontSize='small' />
                <Text text='가맹점' flex={1} fontSize='small' />
                <Text text='금액' flex={1} fontSize='small' />
                <Text text='비고' flex={2} fontSize='small' />
              </ListItemContentWrap>
            ),
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
    </Wrap>
  )
}

export default Detail
