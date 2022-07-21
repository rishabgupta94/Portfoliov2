import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/Routes';
import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH_DESKTOP = 100;
const DRAWER_WIDTH_MOBILE = 250;

const drawerItems = [
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

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
	},
	listItemText: {
		fontWeight: 'bold !important',
	},
	selected: {
		'&.Mui-selected': {
			backgroundColor: '#E7F0FE',
			color: theme.palette.text.secondary,
		},
		'&.MuiListItem-button:hover': {
			backgroundColor: '#E7F0FE',
		},
	},
}));

export const NavBar = () => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const location = useLocation().pathname;
	const container =
		window !== undefined ? () => window.document.body : undefined;

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

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
				<List>
					{drawerItems.map((item, i) => (
						<Link key={i} to={item.path} className={classes.link}>
							<ListItem key={i} disablePadding>
								<ListItemButton
									selected={activeRoute(item.path)}
									className={classes.selected}
								>
									<ListItemText
										classes={{ primary: classes.listItemText }}
										primary={item.name}
									/>
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
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
				<List>
					{drawerItems.map((item, i) => (
						<Link key={i} to={item.path} className={classes.link}>
							<ListItem key={i} disablePadding>
								<ListItemButton
									selected={activeRoute(item.path)}
									className={classes.selected}
								>
									<ListItemText
										classes={{ primary: classes.listItemText }}
										primary={item.name}
									/>
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</>
	);
};
