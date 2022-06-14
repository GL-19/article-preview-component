import { ArticlePreview } from "../../components";
import { Main } from "./styles";
import previewImage from "../../assets/images/drawers.jpg";
import avatar from "../../assets/images/avatar-michelle.jpg";
import { useEffect, useState } from "react";

interface ArticlePreviewData {
	id: string;
	image: string;
	title: string;
	text: string;
	author: string;
	avatar: string;
	date: string;
}

const defaultPreviewsArray: ArticlePreviewData[] = [
	{
		id: "1",
		image: previewImage,
		title: `Shift the overall look and feel by adding these wonderful touches to furniture
            in your home`,
		text: `Ever been in a room and felt like something was missing? Perhaps it felt
           slightly bare and uninviting. I’ve got some simple tips to help you make any
           room feel complete.`,
		date: "28 Jun 2020",
		author: "Michelle Appleton",
		avatar: avatar,
	},
	{
		id: "2",
		image: previewImage,
		title: `Shift the overall look and feel by adding these wonderful touches to furniture
            in your home`,
		text: `Ever been in a room and felt like something was missing? Perhaps it felt
           slightly bare and uninviting. I’ve got some simple tips to help you make any
           room feel complete.`,
		date: "17 Jan 2019",
		author: "Cristina Ricci",
		avatar: avatar,
	},
	{
		id: "3",
		image: previewImage,
		title: `Shift the overall look and feel by adding these wonderful touches to furniture
            in your home`,
		text: `Ever been in a room and felt like something was missing? Perhaps it felt
           slightly bare and uninviting. I’ve got some simple tips to help you make any
           room feel complete.`,
		date: "17 Jan 2019",
		author: "Cristina Ricci",
		avatar: avatar,
	},
];

function Home() {
	const [previews, setPreviews] = useState<ArticlePreviewData[]>(defaultPreviewsArray);

	useEffect(() => {
		setPreviews(defaultPreviewsArray);
	}, []);

	return (
		<Main>
			{previews.map((preview) => (
				<ArticlePreview
					key={preview.id}
					imageSrc={preview.image}
					title={preview.title}
					text={preview.text}
					date={preview.date}
					author={preview.author}
					avatar={preview.avatar}
				/>
			))}
		</Main>
	);
}

export default Home;
