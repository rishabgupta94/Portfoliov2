import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, useTheme } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes';
import { NavBarList } from './NavBarList';

const DRAWER_WIDTH_DESKTOP = 100;
const DRAWER_WIDTH_MOBILE = 250;

export const drawerList = [
	{
		name: 'ABOUT',
		path: ROUTES.ABOUT,
	},
	{
		name: 'SKILLS',
		path: ROUTES.SKILLS,
	},
	{
		name: 'WORK',
		path: ROUTES.WORK,
	},
	{
		name: 'CONTACT',
		path: ROUTES.CONTACT,
	},
];

export const NavBar = () => {
	const theme = useTheme();
	const location = useLocation().pathname;
	const [mobileOpen, setMobileOpen] = useState(false);
	const container =
		window !== undefined ? () => window.document.body : undefined;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	/**
	 * Decides which item to highlight
	 *
	 * @param path the route path
	 * @returns    a boolean if the window url includes the path
	 */
	const activeRoute = (path: ROUTES) => {
		if (location.includes(path)) return true;
		return false;
	};

	return (
		<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={{ mr: 2, ml: 1, display: { sm: 'none' } }}
			>
				<MenuIcon fontSize="large" />
			</IconButton>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				PaperProps={{
					sx: {
						backgroundColor: theme.palette.background.navbar,
						display: 'flex',
						justifyContent: 'center',
					},
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					width: 100,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH_MOBILE,
						boxSizing: 'border-box',
					},
				}}
				anchor="left"
			>
				<NavBarList drawerItems={drawerList} activeRoute={activeRoute} />
			</Drawer>
			<Drawer
				sx={{
					display: { xs: 'none', sm: 'block' },
					width: 100,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH_DESKTOP,
						boxSizing: 'border-box',
					},
				}}
				PaperProps={{
					sx: {
						backgroundColor: theme.palette.background.navbar,
						display: 'flex',
						justifyContent: 'center',
					},
				}}
				anchor="left"
				variant="permanent"
			>
				<NavBarList drawerItems={drawerList} activeRoute={activeRoute} />
			</Drawer>
		</>
	);
};
