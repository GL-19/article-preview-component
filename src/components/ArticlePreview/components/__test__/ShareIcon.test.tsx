/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ShareIcon } from "..";
import { theme } from "../../../../styles/theme";

describe("ArticleInfo Component", () => {
	const onClick = jest.fn();

	it("should render with passed props correctly", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ShareIcon onClick={onClick} />
			</ThemeProvider>
		);

		expect(screen.getByAltText("share-icon")).toBeInTheDocument();
	});

	it("should call onClick when clicked", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<ShareIcon onClick={onClick} />
			</ThemeProvider>
		);

		const icon = screen.getByAltText("share-icon");

		fireEvent.click(icon);
		fireEvent.click(icon);

		expect(onClick).toHaveBeenCalled();
		expect(onClick).toHaveBeenCalledTimes(2);
	});
});
