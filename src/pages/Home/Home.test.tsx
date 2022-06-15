/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "./";
import { api } from "../../services/api";
import { defaultPreviewsArray } from "../../utils/defaultPreviewsArray";
import { theme } from "../../styles/theme";

jest.mock("../../services/api");

const mockedApi = api as jest.Mocked<typeof api>;

const response = {
	status: 200,
	data: defaultPreviewsArray,
};

describe("Home Page", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		mockedApi.get.mockResolvedValue({
			status: 200,
			data: defaultPreviewsArray,
		});
	});

	it("should be able to get the articles previews from API", async () => {
		render(
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		);

		expect(mockedApi.get).toHaveBeenCalled();
		expect(mockedApi.get).toHaveBeenCalledWith("previews");
		expect(await mockedApi.get.mock.results[0].value).toStrictEqual(response);
	});

	it("should be able to display the articles previews", async () => {
		const screen = render(
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		);

		const articlesPreviews = await screen.findAllByTestId("article-preview");

		expect(articlesPreviews).toHaveLength(3);
		expect(articlesPreviews[0]).toHaveTextContent("Michelle Appleton");
		expect(articlesPreviews[1]).toHaveTextContent("Cristina Ricci");
		expect(articlesPreviews[2]).toHaveTextContent("Peter Hawk");
	});

	it("should display an error message when the request fails", async () => {
		mockedApi.get.mockRejectedValue({
			status: 400,
			error: "Mock Error",
		});

		const screen = render(
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		);

		const errorMessage = await screen.findByText("Falha na requisição");
		expect(errorMessage).toBeInTheDocument();
	});
});
