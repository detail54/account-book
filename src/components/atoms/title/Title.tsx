import React from 'react'
// style
import TitleStyles from './Title.styles'

interface IProps {
  type?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'
  text: string
}

const Title: React.FC<IProps> = ({ type = 'H2', text }) => {
  const TitleEl = TitleStyles[type]
  return <TitleEl>{text}</TitleEl>
}

export default Title
