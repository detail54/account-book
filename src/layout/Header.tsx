import React from 'react'
// lib
import { signIn, signOut } from 'next-auth/react'
// components
import Button from 'components/atoms/button/Button'
// hook
import { useSession } from 'hooks/useSession'
// style
import HeaderStyles from './Header.styles'

interface IProps {
  changeThemeButtonText: string
  onChangeTheme: () => void
}

const Header: React.FC<IProps> = ({ changeThemeButtonText, onChangeTheme }) => {
  const { data: session } = useSession()
  const { HeaderEl, UserInfo, Buttons } = HeaderStyles

  return (
    <HeaderEl>
      <UserInfo>
        {!session ? '로그인 해주세요.' : `${session.user.name} 님`}
      </UserInfo>
      <Buttons>
        <Button
          buttonStyle='RoundButton'
          size='md'
          bgColor='orange_4'
          text={changeThemeButtonText}
          onClick={onChangeTheme}
        />
        {!session ? (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_1'
            text='로그인'
            onClick={() => signIn()}
          />
        ) : (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='grey_4'
            text='로그아웃'
            onClick={signOut}
          />
        )}
      </Buttons>
    </HeaderEl>
  )
}

export default Header
