import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { makeStyles, createStyles, DefaultTheme } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerItems = ['HOME', 'SKILLS', 'WORK', 'CONTACT'];

const useStyles = makeStyles((theme) => ({
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
					<ListItem key={i} disablePadding>
						<ListItemButton selected={false} className={classes.selected}>
							<ListItemText
								classes={{ primary: classes.listItemText }}
								primary={item}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};
