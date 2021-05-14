import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';

const InformationBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	p {
		margin: 0.125rem;
		margin-left: 0.25rem;
		font-size: 1.5rem;
		&#boldTextTeal {
			font-weight: 750;
			color: ${palette.cyan[5]};
		}
		&#boldTextBlack {
			font-weight: 750;
			color: ${palette.gray[8]};
		}
		&#boldTextGray {
			font-weight: 750;
			color: ${palette.gray[6]};
		}
		&#subTextGray {
			margin-top: 1rem;
			font-size: 1rem;
			font-weight: 600;
			color: ${palette.gray[6]};
		}
	}
`;

export default function Information({ topRound, bottomRound }) {
	return (
		<InformationBlock>
			<div>
				<p id="boldTextTeal">{topRound === 2 ? '결승' : topRound}</p>
				<p id="boldTextBlack">강</p>
			</div>
			<div>
				<p id="boldTextTeal">{bottomRound}</p>
				<p id="boldTextGray">/</p>
				<p id="boldTextBlack">{topRound / 2}</p>
			</div>
			<p id="subTextGray">마음에 드는 카드를 눌러 보세요</p>
		</InformationBlock>
	);
}
