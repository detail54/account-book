import { NextPage } from 'next'
import React from 'react'
// hook
import useAccount from 'hooks/useAccount'
import useDashBoard from 'hooks/useDashBoard'
import useDate from 'hooks/useDate'
// components
import List from 'components/organisms/list/List'
import Text from 'components/atoms/text/Text'
// type
import { IListItemProps } from 'components/molecules/listItem/ListItem'
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
  const { getDashBoardData } = useDashBoard()

  const { data: accountData } = getAccount(selectDate)
  const { data: dashBoardData } = getDashBoardData(format('YYYY-MM'))

  const onChangeSelectDate = (date: string) => {
    setSelectDate(date)
  }

  const listData: IListItemProps[] | undefined =
    dashBoardData &&
    dashBoardData.list.map((account, index) => {
      const content = (
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
      )

      return {
        type: 'ListItem',
        itemNumber: index + 1 < 10 ? `0${index + 1}` : index + 1,
        content,
        paddingY: 'md',
        hover: true,
        active: account.date === selectDate,
        onClick: () => onChangeSelectDate(account.date),
      }
    })

  return (
    <Wrap>
      <Section>
        <Text text={selectDate} type='BoldText' fontSize='xxxl' />
        <List
          type='List'
          listItemType='NumberListItem'
          contents={listData}
          height={600}
          boxShadow
        />
      </Section>
      <Section>
        <List
          type='List'
          listItemType='NumberListItem'
          contents={listData}
          height={600}
          boxShadow
        />
      </Section>
      <Section>
        <List
          type='List'
          listItemType='NumberListItem'
          contents={listData}
          height={600}
          boxShadow
        />
      </Section>
    </Wrap>
  )
}

export default Detail
