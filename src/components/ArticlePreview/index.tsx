import { useEffect, useState } from "react";

import { ArticleInfo, ShareLinks } from "./components";
import {
	ArticlePreviewContainer,
	Content,
	PreviewImage,
	Footer,
	TextContainer,
	ShareIcon,
} from "./styles";

import shareIcon from "../../assets/images/icon-share.svg";

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
	const [isShareActive, setIsShareActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 420) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		const updateMedia = () => {
			if (window.innerWidth <= 420) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, []);

	return (
		<ArticlePreviewContainer>
			<PreviewImage src={imageSrc} alt="preview" />
			<Content>
				<TextContainer>
					<h1>{title}</h1>
					<p>{text}</p>
				</TextContainer>

				<Footer isActive={isShareActive && isMobile}>
					{isShareActive && isMobile ? (
						<ShareLinks />
					) : (
						<ArticleInfo author={author} avatar={avatar} date={date} />
					)}

					<ShareIcon
						src={shareIcon}
						alt="share-icon"
						onClick={() => setIsShareActive(!isShareActive)}
					/>
				</Footer>
			</Content>
		</ArticlePreviewContainer>
	);
}

export { ArticlePreview };
