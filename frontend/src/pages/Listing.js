import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../lib/style/palette";
import Logo from "../components/common/Logo";
import Subtitle from "../components/common/Subtitle";

import Card from "../components/common/Card";
import TransitionsModal from "../components/common/Modal";

import useAsync from "../lib/hooks/useAsync";
import axios from "axios";
import CircularIndeterminate from "../components/common/CustomCircular";
import { useHistory } from "react-router";
import CardDetail from "../components/common/CardDetail";

const ListingBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const MiddleBlock = styled.div`
  margin-top: 4rem;
  overflow: scroll;
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftBlock = styled.div`
  padding: 4rem;
  margin-right: 2rem;
  text-align: center;
  font-weight: 700;
  color: ${palette.gray[8]};

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 0;
    margin-right: 0;
  }
`;

const GridBlock = styled.div`
  @media (min-width: 320px) and (max-width: 600px) {
    display: flex;
    padding: 2rem 0 2rem 2rem;
    width: calc(100vw - 2rem);
    overflow-x: scroll;
    gap: 2rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 4rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 4rem;
  }

  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 4rem;
  }
`;

export default function Listing() {
  const getDogs = async () => {
    const URL = `/api/winner?feature=${winner}`;
    const res = await axios.get(URL);
    console.log(res.data.data);
    return res.data.data;
  };

  const history = useHistory();
  const [winner, setWinner] = useState(1);
  const [state, refetch] = useAsync(getDogs, []);
  const { loading, data: dogs, error } = state;

  const [forceLoading, setForceLoading] = useState(true);

  return (
    <ListingBlock style={loading ? { opacity: 0 } : { opacity: 1 }}>
      <Logo logoWidth="160px" />
      <MiddleBlock>
        <LeftBlock>
          <Card />
          <p>와 비슷한 유기견들</p>
        </LeftBlock>
        {dogs && !loading ? (
          <GridBlock>
            {dogs.map((dog) => (
              <TransitionsModal key={dog.dog_idx} dog={dog} />
            ))}
          </GridBlock>
        ) : (
          <CircularIndeterminate />
        )}
      </MiddleBlock>

      <Subtitle />
    </ListingBlock>
  );
}
