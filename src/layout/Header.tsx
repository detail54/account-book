import React from 'react'
import dynamic from 'next/dynamic'
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
// components
const LinkButton = dynamic(() => import('components/atoms/button/LinkButton'))

interface IProps {
  isDarkMode: boolean
  onChangeTheme: () => void
}

const Header: React.FC<IProps> = ({ isDarkMode, onChangeTheme }) => {
  const router = useRouter()
  const { data: session, status } = useSession()
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
      <UserInfo>
        {session && (
          <LinkButton
            link='dashboard'
            text={`${session.user?.name} 가계부`}
            size='lg'
            fontSize='xxl'
            fontColor='white'
            bgColor='black_1'
            noneBorder
          />
        )}
      </UserInfo>
      <Buttons>
        <ImgButton
          src={isDarkTheme ? moon : sun}
          width={30}
          height={30}
          onClick={handleChangeTheme}
        />
        {status !== 'loading' && !session && (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_4'
            fontColor='black'
            content='로그인'
            onClick={signIn}
          />
        )}
        {status !== 'loading' && session && (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='grey_4'
            fontColor='black'
            content='로그아웃'
            onClick={onSignOut}
          />
        )}
        {status !== 'loading' && !session && (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_2'
            fontColor='black'
            content='회원가입'
            onClick={singUp}
          />
        )}
      </Buttons>
    </HeaderEl>
  )
}

export default Header
