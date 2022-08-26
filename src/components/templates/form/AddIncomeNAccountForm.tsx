import dynamic from 'next/dynamic'
import React from 'react'
// lib
import { TListContents } from 'components/organisms/list/List'
import { IAddAccount, IAddIncome } from 'config/interface'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
// image
import add from '../../../../public/assets/images/icon/add.png'
import minus from '../../../../public/assets/images/icon/minus.png'
// styles
import AddIncomeNAccountFormStyles from './AddIncomeNAccountForm.styles'
// components
const Text = dynamic(() => import('components/atoms/text/Text'))
const Button = dynamic(() => import('components/atoms/button/Button'))
const List = dynamic(() => import('components/organisms/list/List'))
const ImgButton = dynamic(() => import('components/atoms/button/ImgButton'))
const LinkButton = dynamic(() => import('components/atoms/button/LinkButton'))
const Input = dynamic(() => import('components/atoms/input/Input'))

interface IProps {
  addIncomeDatas: IAddIncome[]
  addAccountData: IAddAccount[]
  addList: (type: 'income' | 'account') => void
  removeListItem: (type: 'income' | 'account', index: number) => void
  handleChangeData: (
    type: 'income' | 'account',
    index: number,
    key: string,
    value: string | number,
  ) => void
  onSubmit: () => void
}

const AddIncomeNAccountForm: React.FC<IProps> = ({
  addIncomeDatas,
  addAccountData,
  addList,
  removeListItem,
  handleChangeData,
  onSubmit,
}) => {
  const [isDarkMode] = useRecoilState(themeState)
  const { Wrap, Form, Section, Buttons, ListItemContentWrap, ListItemContent } =
    AddIncomeNAccountFormStyles

  const addComp = (
    <ImgButton src={add} width={25} height={25} invertImgColor={isDarkMode} />
  )

  const incomsListData: TListContents[] | undefined =
    addIncomeDatas &&
    addIncomeDatas.map((income, index) => {
      return {
        content: (
          <ListItemContentWrap>
            <ListItemContent>
              <Input
                value={income.incomeDt}
                onChange={(e) =>
                  handleChangeData(
                    'income',
                    index,
                    'incomeDt',
                    e.currentTarget.value,
                  )
                }
                flex={2}
              />
              <Input
                value={income.amount}
                onChange={(e) =>
                  handleChangeData(
                    'income',
                    index,
                    'amount',
                    e.currentTarget.value,
                  )
                }
                align='right'
                flex={1}
              />
              <Input
                value={income.memo}
                onChange={(e) =>
                  handleChangeData(
                    'income',
                    index,
                    'memo',
                    e.currentTarget.value,
                  )
                }
                flex={1}
              />
              <ImgButton
                src={minus}
                width={15}
                height={15}
                flex={0.2}
                invertImgColor={isDarkMode}
              />
            </ListItemContent>
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
      }
    })

  const accountListData: TListContents[] | undefined =
    addAccountData &&
    addAccountData.map((account, index) => {
      return {
        content: (
          <ListItemContentWrap>
            <ListItemContent>
              <Input
                value={account.paymentDt}
                onChange={(e) =>
                  handleChangeData(
                    'account',
                    index,
                    'paymentDt',
                    e.currentTarget.value,
                  )
                }
                flex={2}
              />
              <Input
                value={account.category}
                onChange={(e) =>
                  handleChangeData(
                    'account',
                    index,
                    'category',
                    e.currentTarget.value,
                  )
                }
                flex={1}
              />
              <Input
                value={account.store}
                onChange={(e) =>
                  handleChangeData(
                    'account',
                    index,
                    'store',
                    e.currentTarget.value,
                  )
                }
                flex={1}
              />
              <Input
                value={account.amount}
                onChange={(e) =>
                  handleChangeData(
                    'account',
                    index,
                    'amount',
                    e.currentTarget.value,
                  )
                }
                align='right'
                flex={1}
              />
              <Input
                value={account.memo}
                onChange={(e) =>
                  handleChangeData(
                    'account',
                    index,
                    'memo',
                    e.currentTarget.value,
                  )
                }
                flex={1}
              />
              <ImgButton
                src={minus}
                width={15}
                height={15}
                flex={0.2}
                invertImgColor={isDarkMode}
              />
            </ListItemContent>
          </ListItemContentWrap>
        ),
        paddingY: 'md',
        paddingX: 'md',
      }
    })

  return (
    <Wrap>
      <Buttons>
        <Button size='md' text='저장' type='submit' onClick={onSubmit} />
        <LinkButton size='md' text='취소' link='detail' />
      </Buttons>
      <Form>
        <Section>
          <Text text='수익 추가' type='BoldText' fontSize='xxxl' />
          <List
            type='List'
            listItemType='ListItem'
            header={{
              content: (
                <ListItemContentWrap>
                  <Text text='수익 날짜' flex={2} fontSize='small' />
                  <Text text='금액' flex={1} fontSize='small' />
                  <Text text='비고' flex={1} fontSize='small' />
                  <Text text=' ' flex={0.2} />
                </ListItemContentWrap>
              ),
              paddingY: 'xxs',
              paddingX: 'md',
              bgColorNumber: 1,
            }}
            contents={incomsListData.concat([
              {
                content: addComp,
                paddingY: 'xs',
                paddingX: 'xs',
                onClick: () => addList('income'),
              },
            ])}
          />
        </Section>
        <Section>
          <Text text='지출 추가' type='BoldText' fontSize='xxxl' />
          <List
            type='List'
            listItemType='ListItem'
            header={{
              content: (
                <ListItemContentWrap>
                  <Text text='지출 날짜' flex={2} fontSize='small' />
                  <Text text='분류' flex={1} fontSize='small' />
                  <Text text='가맹점' flex={1} fontSize='small' />
                  <Text text='금액' flex={1} fontSize='small' />
                  <Text text='비고' flex={1} fontSize='small' />
                  <Text text=' ' flex={0.2} />
                </ListItemContentWrap>
              ),
              paddingY: 'xxs',
              paddingX: 'md',
              bgColorNumber: 1,
            }}
            contents={accountListData.concat([
              {
                content: addComp,
                paddingY: 'xs',
                paddingX: 'xs',
                onClick: () => addList('account'),
              },
            ])}
          />
        </Section>
      </Form>
    </Wrap>
  )
}

export default AddIncomeNAccountForm
