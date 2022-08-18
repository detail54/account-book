import React from 'react'
// lib
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
// components
import Button from 'components/atoms/button/Button'
import ImgButton from 'components/atoms/button/ImgButton'
// style
import HeaderStyles from './Header.styles'
// image
import sun from '../../public/assets/images/icon/sun.png'
import moon from '../../public/assets/images/icon/moon.png'

interface IProps {
  isDarkMode: boolean
  onChangeTheme: () => void
}

const Header: React.FC<IProps> = ({ isDarkMode, onChangeTheme }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const { HeaderEl, UserInfo, Buttons } = HeaderStyles
  const [isDarkTheme, setIsDarkTheme] = useRecoilState(themeState)

  const singUp = () => {
    router.push('signup')
  }

  const onSignOut = () => {
    sessionStorage.removeItem('session-token')
    signOut({ callbackUrl: '/' })
  }

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkMode)
    onChangeTheme()
  }

  return (
    <HeaderEl>
      <UserInfo>{!session ? '' : `${session.user?.name} 가계부`}</UserInfo>
      <Buttons>
        <ImgButton
          src={isDarkTheme ? moon : sun}
          width={30}
          height={30}
          onClick={handleChangeTheme}
        />
        {!session ? (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_4'
            text='로그인'
            onClick={signIn}
          />
        ) : (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='grey_4'
            text='로그아웃'
            onClick={onSignOut}
          />
        )}
        {!session && (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_2'
            text='회원가입'
            onClick={singUp}
          />
        )}
      </Buttons>
    </HeaderEl>
  )
}

export default Header
