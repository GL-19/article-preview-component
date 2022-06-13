import { ArticlePreviewContainer, AuthorDataContainer, ShareContainer } from "./styles";
import PreviewImage from "../../assets/images/drawers.jpg";
import avatar from "../../assets/images/avatar-michelle.jpg";
import shareIcon from "../../assets/images/icon-share.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";

interface ArticlePreviewProps {
	imageSrc: string;
	title: string;
	text: string;
	date: string;
	author: string;
	avatar: string;
}

function ArticlePreview() {
	return (
		<ArticlePreviewContainer>
			<img src={PreviewImage} alt="preview" />
			<div>
				<h1>
					Shift the overall look and feel by adding these wonderful touches to furniture
					in your home
				</h1>
				<p>
					Ever been in a room and felt like something was missing? Perhaps it felt
					slightly bare and uninviting. I’ve got some simple tips to help you make any
					room feel complete.
				</p>
				<AuthorDataContainer>
					<img src={avatar} alt="avatar" />
					<p>Michelle Appleton</p>
					<p>28 Jun 2020</p>
					<img src={shareIcon} alt="share-icon" />
				</AuthorDataContainer>
				<ShareContainer>
					<p>Share</p>
					<img src={facebookIcon} alt="share-icon" />
					<img src={twitterIcon} alt="share-icon" />
					<img src={pinterestIcon} alt="avatar" />
					<img src={shareIcon} alt="share-icon" />
				</ShareContainer>
			</div>
		</ArticlePreviewContainer>
	);
}

export { ArticlePreview };
