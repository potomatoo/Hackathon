import React from "react";
import styled from "styled-components";
import palette from "../lib/style/palette";

import logo from "../logo.svg";
import Card from "../components/common/Card";

const HomeBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: ${palette.gray[0]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home({ children }) {
  return (
    <HomeBlock>
      <img src={logo} alt="logo" />
      {children}
      <Card />
    </HomeBlock>
  );
}
