import { useEffect, useState } from "react";

import { ArticlePreview } from "../../components";
import { Main } from "./styles";
import { api } from "../../services/api";
import { defaultPreviewsArray } from "../../utils/defaultPreviewsArray";

interface ArticlePreviewData {
	id: string;
	image: string;
	title: string;
	text: string;
	author: string;
	avatar: string;
	date: string;
}

function Home() {
	const [previews, setPreviews] = useState<ArticlePreviewData[]>([]);

	useEffect(() => {
		async function getArticlePreviews() {
			try {
				const response = await api.get<ArticlePreviewData[]>("previews");
				setPreviews(response.data);
			} catch (err) {
				console.error(err);
				setPreviews([defaultPreviewsArray[0]]);
			}
		}

		getArticlePreviews();
	}, []);

	return (
		<Main>
			{previews.map((preview) => (
				<ArticlePreview
					key={preview.id}
					image={preview.image}
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
