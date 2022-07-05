import { makeStyles, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {
	const theme = useTheme();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{ backgroundColor: 'background.navbar' }}
				// style={{ background: `${theme.palette.background.default}` }}
			>
				<Toolbar>
					<Typography color="textPrimary" sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
