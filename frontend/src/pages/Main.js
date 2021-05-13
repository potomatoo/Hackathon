import React from "react";
import styled from "styled-components";
import palette from "../lib/style/palette";

import Logo from "../components/common/Logo";

const MainBlock = styled.div`
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

const TitleBlock = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${palette.gray[8]};
`;

const SubTitleBlock = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${palette.gray[6]};
`;

export default function Main() {
  return (
    <MainBlock>
      <TitleBlock>보호소 유기견 입양 응원 프로젝트</TitleBlock>
      <Logo link />
      <SubTitleBlock>로고를 눌러 유기견들을 구해주세요.</SubTitleBlock>
    </MainBlock>
  );
}
