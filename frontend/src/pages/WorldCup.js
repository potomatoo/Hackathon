// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { useHistory } from 'react-router';
// import Card from '../components/common/Card';
// import Information from '../components/worldcup/Information';
// import Default from './layouts/Default';
// import useAsync from '../lib/hooks/useAsync';
// import useFetch from '../lib/hooks/useFetch';
// import axios from 'axios';
// //
// import * as pick from '../pages/Pick.js';
// const dog_feat = [
// 	'갓난이',
// 	'개구쟁이',
// 	'까망이',
// 	'까칠이',
// 	'듬직이',
// 	'황검이',
// 	'바둑이',
// 	'사나이',
// 	'더벅이',
// 	'온순이',
// 	'쪼꼬미',
// 	'쫑긋이',
// 	'인절미',
// 	'허숙희',
// 	'황구',
// 	'흰둥이'
// ];
// const CardsBlock = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: center;
// 	align-items: center;
// 	margin: 3rem;
// 	@media (min-width: 320px) and (max-width: 600px) {
// 		flex-direction: column;
// 	}
// `;

// export default function WorldCup() {
// 	const history = useHistory();
// 	const [winner, setWinner] = useState(1);
// 	const [dogs, setDogs] = useState([
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/0/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/1/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/2/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/3/2.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/4/1.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/5/2.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/6/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/7/1.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/8/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/9/2.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/10/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/11/3.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/12/2.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/13/2.png',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/14/1.jpg',
// 		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/15/2.jpg'
// 	]);

// 	useEffect(() => {
// 		setI(0);
// 		setNewArray([]);
// 		setNow([dogs[0], dogs[1]]);
// 		setLevel(1);
// 	}, [dogs]);
// 	const [level, setLevel] = useState(1);
// 	const [i, setI] = useState(0);
// 	const [now, setNow] = useState([dogs[0], dogs[1]]);
// 	const [newArray, setNewArray] = useState([]);

// 	const _onClick = idx => {
// 		if (dogs.length === 1) {
// 			console.log(dogs);
// 			history.push({
// 				pathname: `/winner/${Number(String(dogs[1]).substr(56, 2).split('/')[0])}`,
// 				state: { imageUrl: dogs[1] }
// 			});
// 		}
// 		if (newArray.length === dogs.length / 2) {
// 			console.log(newArray);
// 			setDogs(newArray);
// 		}
// 		setNewArray([...newArray, dogs[i]]);
// 		setLevel(level + 1);
// 		setI(i + 2);
// 		setNow([dogs[i], dogs[i + 1]]);
// 	};
// 	return (
// 		<Default>
// 			<Information level={level} round={dogs.length} />
// 			<CardsBlock>
// 				{now.map((dog, idx) => (
// 					<div
// 						key={idx}
// 						onClick={e => {
// 							e.persist();
// 							_onClick(idx);
// 						}}
// 					>
// 						<Card
// 							marginlr
// 							imageUrl={dog}
// 							name={dog_feat[Number(String(dog).substr(56, 2).split('/')[0])]}
// 						/>
// 					</div>
// 				))}
// 			</CardsBlock>
// 		</Default>
// 	);
// }

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Card from '../components/common/Card';
import Information from '../components/worldcup/Information';
import Default from './layouts/Default';
import axios from 'axios';
//

const dog_feat = [
	'갓난이',
	'개구쟁이',
	'까망이',
	'까칠이',
	'듬직이',
	'황검이',
	'바둑이',
	'사나이',
	'더벅이',
	'온순이',
	'쪼꼬미',
	'쫑긋이',
	'인절미',
	'허숙희',
	'황구',
	'흰둥이'
];
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
async function getDogs(id) {
	// console.log(id);
	const URL = `/api/winner?feature=${id}`;
	const res = await axios.get(URL);
	console.log(res.data);
	return res.data;
}
async function fetchDogs() {
	const URL = `https://jsonplaceholder.typicode.com/users`;
	const res = await axios.get(URL);
	return res.data;
}
export default function WorldCup() {
	const history = useHistory();
	const [winners, setWinners] = useState([]);
	//
	const [dogs, setDogs] = useState([
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/0/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/1/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/2/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/3/2.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/4/1.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/5/2.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/6/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/7/1.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/8/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/9/2.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/10/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/11/3.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/12/2.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/13/2.png',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/14/1.jpg',
		'https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/15/2.jpg'
	]);
	const [displays, setDisplays] = useState([]);

	const [round, setRound] = useState([16, 1]);

	useEffect(() => {
		setDisplays([dogs[0], dogs[1]]);
	}, []);

	const _onClick = dog => event => {
		if (displays.length === 1) {
			history.push({
				pathname: `/winner/${Number(String(displays[0]).substr(56, 2).split('/')[0])}`,
				state: { imageUrl: displays[0] }
			});
		}
		if (dogs.length <= 2) {
			if (winners.length === 0) {
				setDisplays([dog]);
			} else {
				let updatedDog = [...winners, dog];
				setDogs(updatedDog);
				setDisplays([updatedDog[0], updatedDog[1]]);
				setWinners([]);
				setRound([round[0] / 2, 1]);
			}
		} else if (dogs.length > 2) {
			setWinners([...winners, dog]);
			setDisplays([dogs[2], dogs[3]]);
			setDogs(dogs.slice(2));
			console.log('d');
			setRound([round[0], round[1] + 1]);
		}
	};
	return (
		<Default>
			<Information topRound={round[0]} bottomRound={round[1]} />
			<CardsBlock>
				{displays.map(dog => {
					return (
						<div key={dog.name} onClick={_onClick(dog)}>
							<Card
								marginlr
								imageUrl={dog}
								name={dog_feat[Number(String(dog).substr(56, 2).split('/')[0])]}
							/>
						</div>
					);
				})}
			</CardsBlock>
		</Default>
	);
}
