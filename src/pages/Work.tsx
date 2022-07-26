import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';

// eslint-disable-next-line quotes
const workItems = ['ReelData AI', 'Perennia', "St. Mary's Uni", 'Optymyze'];

export const Work = () => {
	const theme = useTheme();
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={5}
			height={'100vh'}
		>
			<List>
				{workItems.map((item, i) => (
					<ListItem key={i} disablePadding>
						<ListItemButton
						// selected={activeRoute(item.path)}
						// className={classes.selected}
						>
							<ListItemText
								// classes={{ primary: classes.listItemText }}
								primary={item}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Grid>
	);
};
