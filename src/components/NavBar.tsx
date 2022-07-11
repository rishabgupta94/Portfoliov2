import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Routes';

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

	const activeRoute = (path: ROUTES) => {
		if (location.includes(path)) return true;
		return false;
	};

	return (
		<Drawer
			sx={{
				width: 100,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: 100,
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
	);
};
