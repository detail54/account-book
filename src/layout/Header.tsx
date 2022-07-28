import React from 'react'
// lib
import { signIn, signOut } from 'next-auth/react'
// components
import Button from 'components/atoms/button/Button'
import ImgButton from 'components/atoms/button/ImgButton'
// hook
import { useSession } from 'hooks/useSession'
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
  const { data: session } = useSession()
  const { HeaderEl, UserInfo, Buttons } = HeaderStyles

  return (
    <HeaderEl>
      <UserInfo>{!session ? '' : `${session.user.name} 님`}</UserInfo>
      <Buttons>
        <ImgButton
          src={isDarkMode ? moon : sun}
          width={30}
          height={30}
          onClick={onChangeTheme}
        />
        {!session ? (
          <Button
            buttonStyle='RoundButton'
            size='md'
            bgColor='orange_4'
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
