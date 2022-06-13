import { colors, IColors } from "./colors";
import { screenSize, IScreenSize } from "./screenSize";

export interface ITheme {
	colors: IColors;
	screenSize: IScreenSize;
}

export const theme = {
	colors,
	screenSize,
};
