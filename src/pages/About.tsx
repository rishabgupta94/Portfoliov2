import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

export const About = () => {
	const theme = useTheme();
	// const classes = useStyles(theme);

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={5}
			height={'100vh'}
		>
			<Grid item xs={12} sm={12} md={6} flexDirection="column-reverse">
				<Typography
					marginLeft={1}
					fontSize={'larger'}
					color={theme.palette.text.third}
				>
					Hello there, I&apos;m
				</Typography>
				<Typography
					variant="h1"
					fontWeight={500}
					color={theme.palette.text.primary}
				>
					Rishab
				</Typography>
				<Typography
					variant="h3"
					fontWeight={500}
					gutterBottom
					color={theme.palette.text.disabled}
				>
					I build websites.
				</Typography>
				<Typography fontSize={'larger'} color={theme.palette.text.disabled}>
					I am a Software Engineer, located in Halifax, Canada.
					<br />I specialize in builiding websites in{' '}
					<span style={{ color: theme.palette.text.secondary }}>React </span>
					with a focus on
					<br />
					creating a{' '}
					<span style={{ color: theme.palette.text.secondary }}>
						intuitive user interface.
					</span>
				</Typography>
			</Grid>
			<Grid item>Photo</Grid>
		</Grid>
	);
};
