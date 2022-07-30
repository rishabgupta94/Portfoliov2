import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { useState } from 'react';

// eslint-disable-next-line quotes
const workItems = ['ReelData AI', 'Perennia', "St. Mary's Uni", 'Optymyze'];

export const Work = () => {
	const theme = useTheme();
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
