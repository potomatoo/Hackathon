import React, { useState } from "react";
import styled from "styled-components";
import palette from "../lib/style/palette";
import { Link } from "react-router-dom";

import Default from "./layouts/Default";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

import { GiSittingDog } from "react-icons/gi";

const WinnerBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 3rem;

  @media (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 720px) {
    justify-content: center;
    gap: 0.5rem;
  }

  @media (min-width: 721px) {
    justify-content: center;
  }
`;

const WinnerTextBlock = styled.div`
  width: 350px;
  height: 380px;

  margin-left: 2rem;

  #celebration {
    margin-top: 4rem;
    h6 {
      display: inline;
      margin: 0;
      font-weight: 400;
      font-size: 1.5rem;
      color: ${palette.gray[8]};
      &#dogName {
        font-weight: 700;
      }
    }
  }
  #subText {
    margin-top: 4rem;
    p {
      display: inline;
      font-size: 1rem;
      color: ${palette.gray[7]};
      &#dogName {
        font-weight: 700;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 600px) {
    width: 236px;

    #celebration {
      margin-top: 0;
    }
  }

  @media (min-width: 601px) and (max-width: 720px) {
    width: 300px;
  }
`;

export default function Winner(props) {
  const [winnerData, setWinner] = useState({
    winner: props.history.location.state.winner,
    image: props.history.location.state.image,
  });
  return (
    <Default>
      <WinnerBlock>
        <Card />
        <WinnerTextBlock>
          <div id="celebration">
            <h6 id="dogName">{winnerData.winner}</h6>
            <h6>가</h6>
            <br />
            <h6> 우승했습니다!</h6>
          </div>
          <div id="subText">
            <p>이런 </p>
            <p id="dogName">{winnerData.winner}</p>
            <p>와 비슷한 친구들이 입양을 기다리고 있는데,</p>
            <br />
            <p>소개 해드리고 싶어요.</p>
          </div>
          <Button
            style={{
              marginTop: "4rem",
            }}
            color={palette.cyan[4]}
            hvcolor={palette.cyan[6]}
          >
            <Link to={`/listing/${props.winner}`}>
              <GiSittingDog
                style={{
                  marginRight: "0.5rem",
                }}
              />
              친구들 보러가기
            </Link>
          </Button>
        </WinnerTextBlock>
      </WinnerBlock>
    </Default>
  );
}
