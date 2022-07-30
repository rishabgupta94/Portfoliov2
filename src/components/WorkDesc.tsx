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
				<>
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
				</>
			);
		case 'Perennia':
			return (
				<>
					<Typography
						variant="h4"
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Front End Developer
					</Typography>

					<Typography gutterBottom color={theme.palette.text.disabled}>
						November 2019 - March 2021
					</Typography>
					<Typography
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Led my team to follow the agile software development process
						resulting in more organized tasks and quicker deliveries to the
						client.
						<br />
						Designed the website in AdobeXD; responsible for managing the
						front-end code and improving the website's performance and interface{' '}
						<br />
						Used AWS services to create APIs, add authentication, storage, and
						host the website.
						<br />
						Collaborating with potential customers to get constant feedback.
					</Typography>
				</>
			);
		case 'St. Marys Uni':
			return (
				<>
					<Typography
						variant="h4"
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Financial Text Analytics
					</Typography>

					<Typography gutterBottom color={theme.palette.text.disabled}>
						May 2019 - August 2019
					</Typography>
					<Typography
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Automated the data collection process to collect the financial data
						of 1000 firms from SEC
						<br />
						Performed data cleaning, textual processing and analysis on the
						unstructured data for information retrieval
						<br />
						The extracted information will be used in the research to convey
						insights about firms’ systematic risks, which is the major component
						of the cost of capital of the firms.
					</Typography>
				</>
			);
		case 'Optymyze':
			return (
				<>
					<Typography
						variant="h4"
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Software Testing Engineer
					</Typography>

					<Typography gutterBottom color={theme.palette.text.disabled}>
						July 2017 - August 2018
					</Typography>
					<Typography
						fontWeight={500}
						gutterBottom
						color={theme.palette.text.disabled}
					>
						Being the feature owner of "Workflows"; I ensured that a thorough
						testing is done with minimum of 95% confidence coverage and bug rate
						less than 1%
						<br />
						Recognized for outstanding management of mobile platform testing
						program
						<br />
						Assisted in designing the workflow module to detail any technical or
						functional constraints resulting in a smoother and more
						user-friendly experience
						<br />
						Co-ordinate with cross-functional teams to deliver products as per
						the road map deadline
						<br />
						To make sure the code is bug and defect free before committing it to
						the master
						<br />
						To write and maintain the scripts for regression testing, reducing
						the manual effort
					</Typography>
				</>
			);
		default:
			return <h1> Nothing</h1>;
	}
};
