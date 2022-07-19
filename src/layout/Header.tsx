import React from 'react'
// components
import Button from 'components/atoms/button/Button'
// style
import HeaderEl from './Header.styles'

interface IProps {
  changeThemeButtonText: string
  onChangeTheme: () => void
}

const Header: React.FC<IProps> = ({ changeThemeButtonText, onChangeTheme }) => {
  return (
    <HeaderEl>
      header
      <Button
        type='RoundButton'
        size='xl'
        bgColor='orange_4'
        text={changeThemeButtonText}
        onClick={onChangeTheme}
      />
    </HeaderEl>
  )
}

export default Header
