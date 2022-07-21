import { Container, Grid, Typography, useTheme } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import React from 'react';

// const useStyles = makeStyles(() => ({}));

export const About = () => {
	const theme = useTheme();
	// const classes = useStyles(theme);

	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				spacing={5}
				height={'100vh'}
			>
				<Grid item>
					<Typography
						marginLeft={1}
						fontSize={'larger'}
						color={theme.palette.text.third}
					>
						Hi, my name is
					</Typography>
					<Typography
						variant="h1"
						fontWeight={500}
						color={theme.palette.text.primary}
					>
						Rishab Gupta
					</Typography>
					<Typography
						variant="h3"
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						I build websites
					</Typography>
					<Typography fontSize={'larger'} color={theme.palette.text.disabled}>
						I am a Software Engineer, located in Halifax, Canada.
						<br />I specialize in builiding websites in{' '}
						<span style={{ color: theme.palette.text.secondary }}>React </span>
						with a focus on
						<br />
						creating an{' '}
						<span style={{ color: theme.palette.text.secondary }}>
							intuitive user interface.
						</span>
					</Typography>
				</Grid>
				<Grid item>Photo</Grid>
			</Grid>
		</Container>
	);
};
