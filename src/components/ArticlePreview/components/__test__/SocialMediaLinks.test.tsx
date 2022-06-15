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

		const shareText = screen.getByText("share");
		const facebookIcon = screen.getByAltText("facebook-icon");
		const twitterIcon = screen.getByAltText("twitter-icon");
		const pinterestIcon = screen.getByAltText("pinterest-icon");

		expect(shareText).toBeInTheDocument();
		expect(facebookIcon).toBeInTheDocument();
		expect(twitterIcon).toBeInTheDocument();
		expect(pinterestIcon).toBeInTheDocument();
	});
});
