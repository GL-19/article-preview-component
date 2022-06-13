import {
	ArticlePreviewContainer,
	ArticleData,
	Content,
	PreviewImage,
	ShareLinks,
	Footer,
	Avatar,
	Icon,
	TextContainer,
} from "./styles";
import previewImage from "../../assets/images/drawers.jpg";
import avatar from "../../assets/images/avatar-michelle.jpg";
import shareIcon from "../../assets/images/icon-share.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";

import { useState } from "react";

interface ArticlePreviewProps {
	imageSrc: string;
	title: string;
	text: string;
	date: string;
	author: string;
	avatar: string;
}

function ArticlePreview() {
	const [isShareActive, setIsShareActive] = useState(false);

	return (
		<ArticlePreviewContainer>
			<PreviewImage src={previewImage} alt="preview" />
			<Content>
				<TextContainer>
					<h1>
						Shift the overall look and feel by adding these wonderful touches to furniture
						in your home
					</h1>
					<p>
						Ever been in a room and felt like something was missing? Perhaps it felt
						slightly bare and uninviting. I’ve got some simple tips to help you make any
						room feel complete.
					</p>
				</TextContainer>

				<Footer isActive={isShareActive}>
					{isShareActive ? (
						<ShareLinks>
							<p>Share</p>
							<Icon src={facebookIcon} alt="share-icon" />
							<Icon src={twitterIcon} alt="share-icon" />
							<Icon src={pinterestIcon} alt="avatar" />
						</ShareLinks>
					) : (
						<ArticleData>
							<Avatar src={avatar} alt="avatar" />
							<h2>Michelle Appleton</h2>
							<p>28 Jun 2020</p>
						</ArticleData>
					)}

					<Icon
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
