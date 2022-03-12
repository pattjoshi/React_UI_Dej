import React from 'react'
import styled, { css } from "styled-components";
import Intro from './Intro'

// This all are component 

const Container = styled.div`
    height:100vh;
  
`

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-item:center;
    justify-content: space-between;
`
const Left = styled.div`
    width:60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-weight:bold;
    text-decoration: underline crimson;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
   margin-right:30px;
   font-size:20px;
   font-weight:bold;
   color:gray;

`;

const Button = styled.button`
    border:2px solid white;
    padding: 10px 15px;
    background-color:crimson;
    color:white;
    font-weight:bold;
    border-radius:10px;
    cursor:pointer;
`
const Shape = css`
    width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 z-index: -1;
 `

const IntoShape = styled.div`
${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agency</Logo>

                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Feacture</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>

                    </Menu>

                </Left>
                <Button>JOIN TODAY</Button>
            </Wrapper>
            <Intro />
            <IntoShape />


        </Container>
    )
}

export default Navbar;
