/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ArticleInfo } from "..";
import avatar from "../../../../assets/images/avatar-michelle.jpg";
import { theme } from "../../../../styles/theme";

const defaultProps = {
	author: "Glauber Loiola",
	date: "27 de Maio de 2023",
	avatar: avatar as string,
};

describe("ArticleInfo Component", () => {
	it("should render with passed props correctly", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticleInfo {...defaultProps} />
			</ThemeProvider>
		);

		const author = screen.getByText(defaultProps.author);
		const date = screen.getByText(defaultProps.date);
		const avatar = screen.getByAltText("avatar");

		expect(author).toBeInTheDocument();
		expect(date).toBeInTheDocument();
		expect(avatar).toBeInTheDocument();
	});

	it("should re-render correctly with a change in props", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ArticleInfo
					author={defaultProps.author}
					date={defaultProps.date}
					avatar={defaultProps.avatar}
				/>
			</ThemeProvider>
		);

		screen.rerender(
			<ThemeProvider theme={theme}>
				<ArticleInfo
					author="Debora Cristina"
					date={"12 de Março de 2012"}
					avatar={defaultProps.avatar}
				/>
			</ThemeProvider>
		);

		const author = screen.getByText("Debora Cristina");
		const date = screen.getByText("12 de Março de 2012");
		const avatar = screen.getByAltText("avatar");

		expect(author).toBeInTheDocument();
		expect(date).toBeInTheDocument();
		expect(avatar).toBeInTheDocument();
	});
});
