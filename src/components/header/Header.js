import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import frogImg from 'assets/images/green_frog.svg'

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: #cecece;
  border-bottom: #dddddd;

  .imgContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-left: 50px;

    img {
      width: 100px;
      height: 90px;
    }
  }
`

const MenuContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-right: 50px;

  a {
    margin: 0 10px;
    font-size: 18px;
    cursor: pointer;
    color: #e71b1b;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className={'imgContainer'}>
        <img src={frogImg} />
      </div>
      <MenuContainer>
        <Link to={'/flex'}>Flex</Link>
        <Link to={'/modal'}>Modal</Link>
      </MenuContainer>
    </StyledHeader>
  )
}

export default Header
