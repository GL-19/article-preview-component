import { useEffect, useState } from "react";

import { ArticlePreview } from "../../components";
import { Main } from "./styles";
import { defaultPreviewsArray } from "../../utils/defaultPreviewsArray";
import { api } from "../../services/api";

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
		api
			.get<ArticlePreviewData[]>("previews")
			.then((response) => {
				setPreviews(response.data);
			})
			.catch(() => {
				console.log("Falha na requisição");
				// setPreviews(defaultPreviewsArray);
			});
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
