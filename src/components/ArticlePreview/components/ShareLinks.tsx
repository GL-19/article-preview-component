import facebookIcon from "../../../assets/images/icon-facebook.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../../assets/images/icon-pinterest.svg";
import styled from "styled-components";

export function ShareLinks() {
	return (
		<Container>
			<p>share</p>
			<FacebookIcon src={facebookIcon} alt="share-icon" />
			<Icon src={twitterIcon} alt="share-icon" />
			<Icon src={pinterestIcon} alt="avatar" />
			<span></span>
		</Container>
	);
}

export const Icon = styled.img`
	width: 1.33rem;
	height: 1.33rem;
	border-radius: 100%;

	&:hover {
		cursor: pointer;
	}
`;

export const FacebookIcon = styled(Icon)`
	border-radius: 0%;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;

	min-width: 10rem;
	min-height: 3rem;

	p {
		font-size: 0.8125rem;
		letter-spacing: 0.33rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
	}

	background-color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};

	@media screen and (min-width: 420px) {
		position: fixed;

		margin: -70px -109px;

		padding: 1rem 2rem;
		border-radius: 1rem;
		border: 1px solid ${({ theme }) => theme.colors.veryDarkGrayishBlue};

		span {
			display: block;
			height: 20px;
			width: 20px;
			background-color: inherit;
			border: inherit;
			position: absolute;
			bottom: -10px;
			left: calc(50% - 10px);
			clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
			transform: rotate(-45deg);
			border-radius: 0 0 0 0.25em;
		}
	}
`;

// Para olhar como colocar o triangulo https://www.youtube.com/watch?v=Uk27UanpXRU
