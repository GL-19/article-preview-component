import { useEffect, useState } from "react";

import { ArticleInfo, ShareIcon, ShareLinks } from "./components";
import {
	Container,
	Content,
	PreviewImage,
	Footer,
	TextContainer,
	DesktopShareContainer,
} from "./styles";

interface ArticlePreviewProps {
	imageSrc: string;
	title: string;
	text: string;
	date: string;
	author: string;
	avatar: string;
}

function ArticlePreview({
	imageSrc,
	title,
	text,
	date,
	author,
	avatar,
}: ArticlePreviewProps) {
	const [showShareLinks, setShowShareLinks] = useState(false);
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 420) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		const updateMedia = () => {
			if (window.innerWidth <= 420) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, []);

	return (
		<Container>
			<PreviewImage src={imageSrc} alt="preview" />
			<Content>
				<TextContainer>
					<h1>{title}</h1>
					<p>{text}</p>
				</TextContainer>

				<Footer isActive={showShareLinks && isMobile}>
					{showShareLinks && isMobile ? (
						<ShareLinks />
					) : (
						<ArticleInfo author={author} avatar={avatar} date={date} />
					)}
					<DesktopShareContainer>
						{showShareLinks && !isMobile && <ShareLinks />}
						<ShareIcon onClick={() => setShowShareLinks(!showShareLinks)} />
					</DesktopShareContainer>
				</Footer>
			</Content>
		</Container>
	);
}

export { ArticlePreview };
