import styled from "styled-components";

export const ArticlePreviewContainer = styled.div`
	max-width: 720px;

	display: flex;
	justify-content: center;
	align-content: center;

	border-radius: 10px;
	overflow: hidden;
	background-color: white;

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		flex-direction: column;
	} ;
`;

export const PreviewImage = styled.img`
	width: 40%;

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: 100%;
	} ;
`;

export const Content = styled.div`
	width: 60%;

	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1.25rem;
		color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
		font-weight: 700;
	}

	h2 {
		font-size: 0.8125rem;
		color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
		font-weight: 700;
	}

	p {
		font-size: 0.8125rem;
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
	}

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: 100%;

		h1 {
			font-size: 1rem;
		}
	}
`;

export const TextContainer = styled.div`
	padding: 0 2rem;
	margin: 1.5rem 0;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const ShareIcon = styled.img`
	background-color: ${({ theme }) => theme.colors.grayishBlue};

	width: 1.75rem;
	height: 1.75rem;
	border-radius: 100%;
	padding: 0.33rem;
`;

interface FooterProps {
	isActive: boolean;
}

export const Footer = styled.div<FooterProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0.75rem 2rem;

	background-color: ${({ theme, isActive }) =>
		isActive ? theme.colors.veryDarkGrayishBlue : "white"};
`;
