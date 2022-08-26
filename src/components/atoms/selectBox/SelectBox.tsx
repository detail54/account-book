import React from 'react'
// style
import SelectBoxStyles from './SelectBox.styles'

interface IProps {
  width?: string | number
  contents: string[] | number[]
  selectContent: string | number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox: React.FC<IProps> = ({
  width,
  contents,
  selectContent,
  onChange,
}) => {
  const { Select, Option } = SelectBoxStyles
  return (
    <Select width={width} value={selectContent} onChange={onChange}>
      {contents.map((content) => (
        <Option key={`select-option-${content}`} value={content}>
          {content}
        </Option>
      ))}
    </Select>
  )
}

export default SelectBox
