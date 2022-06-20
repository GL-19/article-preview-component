import defaultPreviewImage from "../assets/images/drawers.jpg";
import michelle from "../assets/images/avatar-michelle.jpg";
import cristina from "../assets/images/avatar-cristina.jpg";
import peter from "../assets/images/avatar-peter.jpg";

interface ArticlePreviewData {
	id: string;
	image: string;
	title: string;
	text: string;
	author: string;
	avatar: string;
	date: string;
}

export const defaultPreviewsArray: ArticlePreviewData[] = [
	{
		id: "1",
		image: defaultPreviewImage,
		title: `Shift the overall look and feel by adding these wonderful touches to furniture in your home`,
		text: `Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.`,
		date: "28 Jun 2020",
		author: "Michelle Appleton",
		avatar: michelle,
	},
	{
		id: "2",
		image: defaultPreviewImage,
		title: `Test Title Number 2`,
		text: `This is the text props of previews array, position number 2.`,
		date: "12 Oct 2021",
		author: "Cristina Ricci",
		avatar: cristina,
	},
	{
		id: "3",
		image: defaultPreviewImage,
		title: `Test Title Number 3`,
		text: `This is the text props of previews array, position number 3.`,
		date: "19 Jan 2018",
		author: "Peter Hawk",
		avatar: peter,
	},
];
