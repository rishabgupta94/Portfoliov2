import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { themeDark } from './utils/theme';

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
