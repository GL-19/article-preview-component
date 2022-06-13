import styled from "styled-components";

export const Container = styled.div`
	max-width: 720px;

	position: relative;

	display: flex;
	justify-content: center;
	align-content: center;
	overflow: hidden;

	border-radius: 10px;
	background-color: white;

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		flex-direction: column;
	} ;
`;

export const PreviewImage = styled.img`
	width: 40%;

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: 100%;
	}
`;

export const Content = styled.div`
	width: 60%;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: 100%;
	}
`;

export const TextContainer = styled.div`
	padding: 0 2rem;
	margin: 1.5rem 0;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h1 {
		font-size: 1.25rem;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};

		@media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
			font-size: 1rem;
		}
	}

	p {
		font-size: 0.8125rem;
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
	}
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

export const DesktopShareContainer = styled.div`
	position: relative;
`;
