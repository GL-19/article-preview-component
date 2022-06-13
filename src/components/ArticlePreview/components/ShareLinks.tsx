import facebookIcon from "../../../assets/images/icon-facebook.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../../assets/images/icon-pinterest.svg";
import styled from "styled-components";

export function ShareLinks() {
	return (
		<Container>
			<p>SHARE</p>
			<FacebookIcon src={facebookIcon} alt="share-icon" />
			<Icon src={twitterIcon} alt="share-icon" />
			<Icon src={pinterestIcon} alt="avatar" />
		</Container>
	);
}

export const Icon = styled.img`
	width: 1.33rem;
	height: 1.33rem;
	border-radius: 100%;
`;

export const FacebookIcon = styled(Icon)`
	border-radius: 0%;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.5rem;

	min-width: 10rem;
	min-height: 3rem;

	p {
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
		letter-spacing: 0.33rem;
	}

	background-color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
`;
