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
import { WorkDesc } from '../components/WorkDesc';

const useStyles = makeStyles((theme) => ({
	selected: {
		'&.Mui-selected': {
			color: theme.palette.text.third,
			borderLeft: 'solid 3px',
		},
	},
}));

export const workItems = [
	'ReelData AI',
	'Perennia',
	// eslint-disable-next-line quotes
	"St. Mary's Uni",
	'Optymyze',
];

export const Work = () => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onListItemClick = (
		_: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
	};

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={5}
			height={'100vh'}
		>
			<Grid item>
				<List>
					{workItems.map((item, i) => (
						<ListItem key={i} disablePadding>
							<ListItemButton
								className={classes.selected}
								selected={selectedIndex === i}
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
			<Grid item>
				<WorkDesc workItems={workItems} selectedIndex={selectedIndex} />
			</Grid>
		</Grid>
	);
};
