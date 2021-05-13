import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Card from '../components/common/Card';
import { Link } from 'react-router-dom';

import Information from '../components/worldcup/Information';
import Default from './layouts/Default';
import useAsync from '../lib/hooks/useAsync';
import axios from 'axios';

//
import * as pick from '../pages/Pick.js';

const CardsBlock = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 3rem;

	@media (min-width: 320px) and (max-width: 600px) {
		flex-direction: column;
	}
`;

async function getDogs() {
	const URL = `http://save-dogs-server-oncpl.run.goorm.io/idealDogs`;
	const res = await axios.get(URL);
	return res.data.data;
}

export default function WorldCup() {
	const history = useHistory();
	const [winner, setWinner] = useState(15);
	const [state, refetch] = useAsync(getDogs, []);
	const { loading, data: users, error } = state;
	const tmp = pick.pick();

	useEffect(() => {
		console.log(users);
	}, [loading, users]);

	return (
		<Default>
			<Information />
			<CardsBlock>
				<Card marginlr isDisappear />
				<Card marginlr isDisappear />
			</CardsBlock>
			<Link
				to={{
					pathname: `/winner/${winner}`,
					state: {
						imageUrl: 'http://www.animal.go.kr/files/shelter/2021/05/202105121905113.jpg'
					}
				}}
			>
				<button>winner</button>
			</Link>
		</Default>
	);
}
