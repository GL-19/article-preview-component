import { useEffect, useState } from "react";
import { theme } from "../../styles/theme";

import { ArticleInfo, ShareIcon, SocialMediaLinks } from "./components";
import { Container, Content, PreviewImage, Footer, TextContainer } from "./styles";

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
	const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(false);
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const screenMobileWidth = Number(theme.screenSize.mobile.split("p")[0]);

		if (window.innerWidth <= screenMobileWidth) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		const updateMedia = () => {
			if (window.innerWidth <= screenMobileWidth) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, []);

	return (
		<Container data-testid="article-preview">
			<PreviewImage src={imageSrc} alt="preview" />
			<Content>
				<TextContainer>
					<h1>{title}</h1>
					<p>{text}</p>
				</TextContainer>

				<Footer isActive={showSocialMediaLinks && isMobile}>
					{showSocialMediaLinks && isMobile ? (
						<SocialMediaLinks />
					) : (
						<ArticleInfo author={author} avatar={avatar} date={date} />
					)}
					<div>
						{showSocialMediaLinks && !isMobile && <SocialMediaLinks />}
						<ShareIcon onClick={() => setShowSocialMediaLinks(!showSocialMediaLinks)} />
					</div>
				</Footer>
			</Content>
		</Container>
	);
}

export { ArticlePreview };
