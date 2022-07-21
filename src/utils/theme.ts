import { createTheme } from '@mui/material';

export const themeLight = createTheme({
	palette: {
		background: {
			default: '#e4f0e2',
		},
	},
});

export const themeDark = createTheme({
	palette: {
		secondary: {
			main: '#6C7180',
		},
		text: {
			primary: '#C0CBEB',
			secondary: '#985757',
			third: '#4D90AD',
			disabled: '#6C7180',
		},
		background: { default: '#1D1D1D', navbar: '#121212' },
	},
});
