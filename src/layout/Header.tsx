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
  const [session] = useSession()
  const { HeaderEl, UserInfo } = HeaderStyles

  return (
    <HeaderEl>
      <UserInfo>
        {!session
          ? '로그인 해주세요.'
          : `${session.user.userName}님 안녕하세요`}
      </UserInfo>
      <Button
        type='RoundButton'
        size='xl'
        bgColor='orange_4'
        text={changeThemeButtonText}
        onClick={onChangeTheme}
      />
      {!session ? (
        <Button
          type='RoundButton'
          size='xl'
          bgColor='orange_1'
          text='로그인'
          onClick={() => signIn()}
        />
      ) : (
        <Button
          type='RoundButton'
          size='xl'
          bgColor='grey_4'
          text='로그아웃'
          onClick={signOut}
        />
      )}
    </HeaderEl>
  )
}

export default Header
