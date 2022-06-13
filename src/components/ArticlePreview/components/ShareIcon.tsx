import styled from "styled-components";
import shareIcon from "../../../assets/images/icon-share.svg";

interface ShareIconProps {
	onClick: () => void;
}

export function ShareIcon({ onClick }: ShareIconProps) {
	return <Icon src={shareIcon} alt="share-icon" onClick={onClick} />;
}

export const Icon = styled.img`
	background-color: ${({ theme }) => theme.colors.grayishBlue};

	width: 1.75rem;
	height: 1.75rem;
	border-radius: 100%;
	padding: 0.33rem;

	&:hover {
		cursor: pointer;
	}
`;
