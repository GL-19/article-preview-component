import { useEffect, useState } from "react";

import { ArticlePreview } from "../../components";
import { Main } from "./styles";
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
	const [apiRequestError, setApiRequestError] = useState(false);

	useEffect(() => {
		async function getArticlePreviews() {
			try {
				const response = await api.get<ArticlePreviewData[]>("previews");
				setPreviews(response.data);
				setApiRequestError(false);
			} catch (err) {
				console.error(err);
				setApiRequestError(true);
			}
		}

		getArticlePreviews();
	}, []);

	return (
		<Main>
			{apiRequestError ? (
				<h1>Falha na requisição</h1>
			) : (
				previews.map((preview) => (
					<ArticlePreview
						key={preview.id}
						imageSrc={preview.image}
						title={preview.title}
						text={preview.text}
						date={preview.date}
						author={preview.author}
						avatar={preview.avatar}
					/>
				))
			)}
		</Main>
	);
}

export default Home;
