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
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;

	/* 	background-color: ${({ theme }) => theme.colors.veryDarkGrayishBlue}; */
`;

export const Avatar = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100%;
`;

export const Icon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
`;

export const ArticleData = styled.div`
	display: grid;
	grid-template-areas:
		"avatar author"
		"avatar date";
	column-gap: 0.75rem;
	align-items: center;

	min-width: 10rem;
	min-height: 3rem;

	${Avatar} {
		grid-area: avatar;
	}

	h2 {
		grid-area: author;
	}

	strong {
		grid-area: date;
	}
`;

export const ShareContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	min-width: 10rem;
	min-height: 3rem;

	p {
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
	}

	background-color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
`;
