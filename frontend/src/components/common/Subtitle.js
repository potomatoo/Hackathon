import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";

const SubtitleBlock = styled.div`
  p {
    margin: 0.0625rem;
    font-size: 24px;
    &#a {
      font-weight: 750;
      color: ${palette.gray[8]};
    }
    &#b {
      font-weight: 750;
      color: ${palette.cyan[5]};
    }
    &#c {
      font-weight: 400;
      color: ${palette.gray[8]};
    }
  }
`;

export default function Subtitle() {
  return (
    <SubtitleBlock>
      <p id="a">강아지</p>
      <p id="b">스타일</p>
      <p id="c">월드컵</p>
    </SubtitleBlock>
  );
}
