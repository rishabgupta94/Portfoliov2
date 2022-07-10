import { ThemeOptions, Theme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
	interface Palette {
		background?: {
			navbar?: string;
		};
	}
	interface PaletteOptions {
		background?: {
			navbar?: string;
		};
	}
	interface TypeBackground {
		navbar?: string;
	}
}

declare module '@mui/styles/defaultTheme' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
	interface DefaultTheme extends Theme {}
}
