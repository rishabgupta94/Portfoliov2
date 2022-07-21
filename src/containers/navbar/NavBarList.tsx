import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes';
import { drawerList } from './NavBar';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
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
	listItemText: {
		fontWeight: 'bold !important',
	},
}));

export const NavBarList = ({
	drawerItems,
	activeRoute,
}: {
	drawerItems: typeof drawerList;
	activeRoute: (path: ROUTES) => boolean;
}) => {
	const theme = useTheme();
	const classes = useStyles(theme);
	return (
		<List style={{ width: 'inherit' }}>
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
	);
};
