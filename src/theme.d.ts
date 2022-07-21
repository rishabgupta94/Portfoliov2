import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		background?: {
			navbar?: string;
		};
		text?: {
			third?: string;
		};
	}
	interface PaletteOptions {
		background?: {
			navbar?: string;
		};
		text?: {
			third?: string;
		};
	}
	interface TypeBackground {
		navbar?: string;
	}
	interface TypeText {
		third?: string;
	}
}

declare module '@mui/styles/defaultTheme' {
	type DefaultTheme = Theme;
}
