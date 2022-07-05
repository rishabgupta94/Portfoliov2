import { ThemeOptions } from '@mui/material/styles';
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
