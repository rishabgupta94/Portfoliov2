import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { workItems } from '../pages/Work';

type WorkDescProps = {
	workItems: typeof workItems;
	selectedIndex: number;
};

export const WorkDesc = ({ workItems, selectedIndex }: WorkDescProps) => {
	const theme = useTheme();

	switch (workItems[selectedIndex]) {
		case 'ReelData AI':
			return (
				<Grid>
					<Typography
						variant="h4"
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Front End Developer
					</Typography>

					<Typography gutterBottom color={theme.palette.text.disabled}>
						March 2021 - present
					</Typography>
					<Typography
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Working closely with the UI/UX designer
						<br />
						Mentoring the inters and junior web developers
					</Typography>
				</Grid>
			);
		default:
			return <h1> Nothing</h1>;
	}
};
