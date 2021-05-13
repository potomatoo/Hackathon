import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";

import Logo from "../../components/common/Logo";
import Subtitle from "../../components/common/Subtitle";

const DefaultBlock = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;

  background: ${palette.gray[0]};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 601px) {
    justify-content: center;
  }
`;

export default function Default({ children }) {
  return (
    <DefaultBlock>
      <Logo logoWidth="160px" />
      {children}
      <Subtitle />
    </DefaultBlock>
  );
}
