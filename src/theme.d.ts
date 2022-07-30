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
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends Theme {}
}
