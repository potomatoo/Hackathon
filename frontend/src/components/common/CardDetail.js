import React, { Component } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import { FiHeart, FiShare2 } from 'react-icons/fi';

const CardBlock = styled.div`
	width: 400px;
	background-color: ${palette.white};
	box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	padding-bottom: 1px;
`;

const DogPictureBlock = styled.div`
	width: 100%;
	height: 360px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 5px 5px 0 0;
`;

const CardContentBlock = styled.div`
	margin: 25px;
	padding: 0;

	display: flex;
	flex-direction: column;
`;

const CardTopBlock = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const IconBlock = styled.div`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

const TitleTextBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleText = styled.span`
	font-size: 20px;
	font-weight: bold;
	color: ${palette.gray[8]};
`;

const CardDetailBlock = styled.div`
	width: 100%;
	margin-top: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
`;

const SubTitleText = styled.span`
	font-size: 15px;
	font-weight: bold;
	color: ${palette.gray[7]};
`;

const DetailText = styled.span`
	font-size: 15px;
	font-weight: regular;
	color: ${palette.gray[6]};
`;

class CardDetail extends Component {
	render() {
		return (
			<CardBlock>
				<DogPictureBlock style={{ backgroundImage: `url('${this.props.imageUrl}')` }}></DogPictureBlock>
				<CardContentBlock>
					<CardTopBlock>
						<IconBlock>
							<FiShare2 color={palette.gray[4]} fill={palette.gray[4]} size={24} />
						</IconBlock>
						<TitleTextBlock>
							<TitleText>{this.props.distance}</TitleText>
							<DetailText>이 유기견까지 떨어진 거리</DetailText>
						</TitleTextBlock>
						<IconBlock>
							<FiHeart color={palette.gray[4]} fill={palette.gray[4]} size={24} />
						</IconBlock>
					</CardTopBlock>
					<CardDetailBlock>
						<InfoBlock>
							<SubTitleText>나이</SubTitleText>
							<DetailText>{this.props.age}</DetailText>
						</InfoBlock>
						<InfoBlock>
							<SubTitleText>체중</SubTitleText>
							<DetailText>{this.props.weight}</DetailText>
						</InfoBlock>
						<InfoBlock>
							<SubTitleText>성별</SubTitleText>
							<DetailText>{this.props.gender}</DetailText>
						</InfoBlock>
						<InfoBlock>
							<SubTitleText>보호소 입소</SubTitleText>
							<DetailText>{this.props.period}</DetailText>
						</InfoBlock>
					</CardDetailBlock>
					<CardDetailBlock>
						<InfoBlock>
							<SubTitleText>특징</SubTitleText>
							<DetailText>{this.props.feature}</DetailText>
						</InfoBlock>
						<InfoBlock>
							<SubTitleText>보호소</SubTitleText>
							<DetailText>{this.props.shelter}</DetailText>
						</InfoBlock>
					</CardDetailBlock>
				</CardContentBlock>
			</CardBlock>
		);
	}
}

export default CardDetail;
