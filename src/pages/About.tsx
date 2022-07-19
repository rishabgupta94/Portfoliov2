import { Container, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
	root: {
		// marginLeft: '60px',
	},
}));

export const About = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="center" alignItems="center" spacing={5}>
				<Grid item>
					<Typography color={theme.palette.text.third}>Name</Typography>
				</Grid>
				<Grid item>Photo</Grid>
			</Grid>
		</Container>
	);
};
