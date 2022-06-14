/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";

import { ArticlePreview } from "..";
import avatar from "../../assets/images/avatar-michelle.jpg";
import preview from "../../assets/images/drawers.jpg";
import { theme } from "../../styles/theme";

const defaultProps = {
	author: "Test Name",
	date: "27 de Maio de 2023",
	title: "Test Title",
	text: "Test Text",
	imageSrc: preview as string,
	avatar: avatar as string,
};

describe("ArticleInfo Component", () => {
	it("should render with passed props correctly", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticlePreview {...defaultProps} />
			</ThemeProvider>
		);

		const author = screen.getByText(defaultProps.author);
		const date = screen.getByText(defaultProps.date);
		const title = screen.getByText(defaultProps.title);
		const text = screen.getByText(defaultProps.text);
		const avatar = screen.getByAltText("avatar");
		const previewImage = screen.getByAltText("preview");

		expect(author).toBeInTheDocument();
		expect(date).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(previewImage).toBeInTheDocument();
		expect(avatar).toBeInTheDocument();
	});

	it("should re-render correctly when props is changed", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticlePreview {...defaultProps} />
			</ThemeProvider>
		);

		screen.rerender(
			<ThemeProvider theme={theme}>
				<ArticlePreview
					{...defaultProps}
					author="Changed Props Author"
					date="30 de Junho de 2014"
				/>
			</ThemeProvider>
		);

		const author = screen.queryByText(defaultProps.author);
		const date = screen.queryByText(defaultProps.date);
		const newAuthor = screen.getByText("Changed Props Author");
		const newDate = screen.getByText("30 de Junho de 2014");

		expect(author).not.toBeInTheDocument();
		expect(date).not.toBeInTheDocument();
		expect(newAuthor).toBeInTheDocument();
		expect(newDate).toBeInTheDocument();
	});

	it("should not display social media links by default", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticlePreview {...defaultProps} />
			</ThemeProvider>
		);

		const facebookLink = screen.queryByAltText("facebook-icon");
		const twitterLink = screen.queryByAltText("twitter-icon");
		const pinterestLink = screen.queryByAltText("pinterest-icon");

		expect(facebookLink).not.toBeInTheDocument();
		expect(twitterLink).not.toBeInTheDocument();
		expect(pinterestLink).not.toBeInTheDocument();
	});

	it("should display social media links after one click on share icon, and hide after a second", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticlePreview {...defaultProps} />
			</ThemeProvider>
		);

		const shareIcon = screen.getByAltText("share-icon");

		fireEvent.click(shareIcon);

		expect(screen.getByAltText("facebook-icon")).toBeInTheDocument();
		expect(screen.getByAltText("twitter-icon")).toBeInTheDocument();
		expect(screen.getByAltText("pinterest-icon")).toBeInTheDocument();

		fireEvent.click(shareIcon);

		expect(screen.queryByAltText("facebook-icon")).not.toBeInTheDocument();
		expect(screen.queryByAltText("twitter-icon")).not.toBeInTheDocument();
		expect(screen.queryByAltText("pinterest-icon")).not.toBeInTheDocument();
	});

	it("should not display article info after click on share icon, if window size <= screenSize.mobile", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticlePreview {...defaultProps} />
			</ThemeProvider>
		);

		act(() => {
			Object.defineProperty(window, "innerWidth", {
				writable: true,
				configurable: true,
				value: 375,
			});

			window.dispatchEvent(new Event("resize"));
		});

		const shareIcon = screen.getByAltText("share-icon");

		fireEvent.click(shareIcon);

		expect(screen.getByAltText("facebook-icon")).toBeInTheDocument();
		expect(screen.getByAltText("twitter-icon")).toBeInTheDocument();
		expect(screen.getByAltText("pinterest-icon")).toBeInTheDocument();

		const author = screen.queryByText(defaultProps.author);
		const avatar = screen.queryByAltText("avatar");
		const date = screen.queryByText(defaultProps.date);

		expect(author).not.toBeInTheDocument();
		expect(avatar).not.toBeInTheDocument();
		expect(date).not.toBeInTheDocument();
	});
});
