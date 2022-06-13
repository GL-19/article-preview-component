import { ArticlePreview } from "../../components";
import { Main } from "./styles";
import previewImage from "../../assets/images/drawers.jpg";
import avatar from "../../assets/images/avatar-michelle.jpg";

function Home() {
	return (
		<Main>
			<ArticlePreview
				imageSrc={previewImage}
				title="Shift the overall look and feel by adding these wonderful touches to furniture
						in your home"
				text="Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make any
        room feel complete."
				date="28 Jun 2020"
				author="Michelle Appleton"
				avatar={avatar}
			/>
		</Main>
	);
}

export default Home;
