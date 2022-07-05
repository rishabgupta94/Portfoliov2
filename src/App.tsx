import {
	Button,
	createTheme,
	CssBaseline,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { NavBar } from './components/NavBar';
import { useState } from 'react';

// const themeLight = createTheme({
// 	palette: {
// 		background: {
// 			default: '#e4f0e2',
// 		},
// 	},
// });

const themeDark = createTheme({
	palette: {
		primary: {
			main: '#C0CBEB',
		},

		text: {
			primary: '#C0CBEB',
			secondary: '#985757',
		},
		background: { default: '#1D1D1D', navbar: 'white' },
	},
});

function App() {
	/**
	 * @todo: Decide the theme colors and
	 * use `light` to toggle the `theme` attribute
	 */
	const [light, setLight] = useState(true);
	return (
		<ThemeProvider theme={themeDark}>
			<CssBaseline />
			<NavBar />
			<Typography color="textSecondary">Portfolio</Typography>
		</ThemeProvider>
	);
}

export default App;
