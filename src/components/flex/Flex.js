import React, { useState } from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
  width: 1000px;
  border: 1px solid #000;
  padding: 20px;
  margin: 30px 0;
`

const StyledTitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`

const StyledForm = styled.form`
  p {
    font-size: 20px;
    font-weight: bold;
  }
  label {
    margin: 0 5px;
  }
`

const StyledBox = styled.div`
  width: 800px;
  margin: 20px 0 30px;
  border: 1px solid #bebebe;
`

const StyledItem = styled.div`
  width: 100px;
  height: 100px;
`

const Flex = (props) => {
  const { boxStyle, itemStyle, colors, title, options, optionKey } = props
  const [optionValue, setOptionValue] = useState(options[0].value)

  const changeRadioValue = (e) => {
    setOptionValue(e.target.value)
  }

  return (
    <SectionContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledBox className={'flex-box'} style={{ ...boxStyle, [optionKey]: optionValue }}>
        {colors.map((color) => (
          <StyledItem className={'flex-items'} style={{ ...itemStyle, background: color }} />
        ))}
      </StyledBox>
      <StyledForm>
        <p>{optionKey}</p>
        <fieldset>
          {options.map((option, idx) => (
            <label key={`radio_${idx}`}>
              <input
                type="radio"
                value={option.value}
                defaultChecked={option.value === options[0].value}
                name={optionKey}
                onChange={changeRadioValue}
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      </StyledForm>
    </SectionContainer>
  )
}

export default Flex
