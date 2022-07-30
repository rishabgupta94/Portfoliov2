import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	selected: {
		'&.Mui-selected': {
			color: theme.palette.text.third,
			borderLeft: 'solid 3px',
		},
	},
}));

// eslint-disable-next-line quotes
const workItems = ['ReelData AI', 'Perennia', "St. Mary's Uni", 'Optymyze'];

export const Work = () => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const [selectedItem, setSelectedItem] = useState(0);

	const onListItemClick = (
		_: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedItem(index);
	};

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
							className={classes.selected}
							selected={selectedItem === i}
							onClick={(event) => onListItemClick(event, i)}
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
