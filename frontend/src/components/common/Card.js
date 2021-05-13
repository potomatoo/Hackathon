import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/style/palette';

const CardBlock = styled.div`
	width: 250px;
	height: 250px;
	left: 420px;
	top: 296px;

	margin-right: ${marginlr => '2rem'};
	margin-left: ${marginlr => '2rem'};

	background-color: ${palette.white};
	box-shadow: 0 0px 50px 0 rgba(0, 0, 0, 0.25);
	transition: 0.5s;
	border-radius: 5px;

	&:hover {
		box-shadow: 0 0px 100px 0 rgba(0, 0, 0, 0.15);
	}

	&.selected {
		width: 0%;
		height: 0%;
		opacity: 0;
		font-size: 0 !important;
		margin: 0rem;
	}

	${({ marginlr }) =>
		marginlr &&
		css`
			margin-left: 2rem;
			margin-right: 2rem;
		`}
`;

const DogPictureBlock = styled.div`
	height: 80%;
	background-image: url('https://dispatch.cdnser.be/wp-content/uploads/2018/08/745ab6ce176fa4b59d1af29bc91fa409.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 5px;
	cursor: pointer;
`;

const CardTextBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20%;
`;

const IconBlock = styled.div`
	padding-right: 1rem;
	cursor: pointer;
`;

const DogNameBlock = styled.div`
	font-size: 1.125rem;
	font-weight: bold;
	color: ${palette.gray[8]};

	&.selected {
		width: 0%;
		height: 0%;
		opacity: 0;
		font-size: 0 !important;
		margin: 0rem;
	}
`;

export default function Card({ isDisappear, marginlr }) {
	const [liked, setLiked] = useState(false);
	const [show, setShow] = useState(true);

	const onToggle = e => {
		const temp = isDisappear;
		isDisappear = false;
		setLiked(!liked);
		isDisappear = temp;
	};

	return (
		<CardBlock
			onClick={() => (isDisappear ? setShow(false) : '')}
			className={show ? '' : 'selected'}
			marginlr={marginlr}
		>
			<DogPictureBlock />
			<CardTextBlock>
				<DogNameBlock />
				<DogNameBlock>절미</DogNameBlock>
				<IconBlock></IconBlock>
			</CardTextBlock>
		</CardBlock>
	);
}
