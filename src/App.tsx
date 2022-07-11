import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from 'components/NavBar';
import { About } from 'pages/About';
import { Skills } from 'pages/Skills';

// const themeLight = createTheme({
// 	palette: {
// 		background: {
// 			default: '#e4f0e2',
// 		},
// 	},
// });

// TODO: Move this to another file
const themeDark = createTheme({
	palette: {
		text: {
			primary: '#C0CBEB',
			secondary: '#985757',
		},
		background: { default: '#1D1D1D', navbar: '#121212' },
	},
});

function App() {
	/**
	 * @todo: Decide the theme colors and
	 * use `light` to toggle the `theme` attribute
	 */
	// const [light, setLight] = useState(true);

	return (
		<ThemeProvider theme={themeDark}>
			<CssBaseline />
			<NavBar />
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/skills" element={<Skills />}></Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
