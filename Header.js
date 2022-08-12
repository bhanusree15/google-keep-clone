import React from 'react';

import download from "E:/New folder/todo/src/download.png";
import styled, { css } from 'styled-components'



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
  `;
const ImgWrap = styled.div`
display: flex;
align-items:center;
`;
const Img = styled.img`
width:40px;
height:40px`;
;
const Header = () => {
    return (
      <Nav>
        <p>TO DO</p>
        <ImgWrap>
          <Img src={download} alt="Google keep logo" />
          <p>+</p>
          </ImgWrap>
      </Nav>
    );
  };
  export default Header;
