import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/flex'
import { dataSample1, dataSample2, dataSample3 } from 'constants/flexConstants'

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const FlexContainer = () => {
  const colors = ['#DC143C', '#FF8C00', '#FFFF00', '#00FF00', '#4682B4', '#00FF7F', '#87CEFA', '#00FFFF', '#0000FF', '#8A2BE2', '#FF1493', '#E0FFFF']

  return (
    <StyledContainer>
      <Flex
        boxStyle={dataSample1.boxStyle}
        itemStyle={dataSample1.itemStyle}
        colors={colors.slice(0, 5)}
        title={dataSample1.title}
        optionKey={dataSample1.optionKey}
        options={dataSample1.options}
      />
      <Flex
        boxStyle={dataSample2.boxStyle}
        itemStyle={dataSample2.itemStyle}
        colors={colors.slice(0, 5)}
        title={dataSample2.title}
        optionKey={dataSample2.optionKey}
        options={dataSample2.options}
      />
      <Flex
        boxStyle={dataSample3.boxStyle}
        itemStyle={dataSample3.itemStyle}
        colors={colors.slice(0, 5)}
        title={dataSample3.title}
        optionKey={dataSample3.optionKey}
        options={dataSample3.options}
      />
    </StyledContainer>
  )
}

export default FlexContainer
