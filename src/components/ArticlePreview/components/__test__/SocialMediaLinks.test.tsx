/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { SocialMediaLinks } from "..";
import { theme } from "../../../../styles/theme";

describe("ArticleInfo Component", () => {
	it("should render with passed props correctly", () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<SocialMediaLinks />
			</ThemeProvider>
		);

		expect(screen.getByText("share")).toBeInTheDocument();
		expect(screen.getByAltText("facebook-icon")).toBeInTheDocument();
		expect(screen.getByAltText("twitter-icon")).toBeInTheDocument();
		expect(screen.getByAltText("pinterest-icon")).toBeInTheDocument();
	});
});
