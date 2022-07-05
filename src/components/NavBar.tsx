import { Drawer, makeStyles, useTheme } from '@mui/material';
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
			<Drawer variant="permanent" anchor="left">
				HOME
			</Drawer>
		</Box>
	);
};
