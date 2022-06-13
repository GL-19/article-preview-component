import styled from "styled-components";

interface ArticleInfoProps {
	author: string;
	avatar: string;
	date: string;
}

export function ArticleInfo({ author, avatar, date }: ArticleInfoProps) {
	return (
		<Container>
			<Avatar src={avatar} alt="avatar" />
			<h1>{author}</h1>
			<p>{date}</p>
		</Container>
	);
}

const Avatar = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100%;
`;

const Container = styled.div`
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

	h1 {
		grid-area: author;

		font-size: 0.8125rem;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
	}

	p {
		grid-area: date;

		font-size: 0.8125rem;
		color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
	}
`;
