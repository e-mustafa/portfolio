import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';

import { FaRegHospital, FaToolbox, FaLaptopCode } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import 'animate.css';
import { SiAutodesk } from 'react-icons/si';

export default function Experience() {
	return (
		<Fragment>
			<Typography variant='h5' textTransform='uppercase' fontWeight={700} mb={2}>
				{' '}
				Experience :{' '}
			</Typography>

			<Timeline position='right' color='text.white' sx={{ px: 0, overflow: 'hidden' }}>
				<Grid container>
					<Grid item xs={12} lg={6}>
						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaLaptopCode />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Dec/2022 - Sep/2023
								</Typography>

								<Typography variant='h6'> Front/Back-end Developer Diploma </Typography>
								<Typography variant='h6'> SEF Future </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaLaptopCode />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Feb/2022 - Aug/2022
								</Typography>

								<Typography variant='h6'> Front-end Developer Diploma </Typography>
								<Typography variant='h6'> Pepo.Teck </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<SiAutodesk />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Nov/2018 - Present
								</Typography>

								<Typography variant='h6'> 3D VISUALIZER </Typography>
								<Typography variant='h6'> Freelancer </Typography>
							</TimelineContent>
						</TimelineItem>
					</Grid>

					<Grid item xs={12} lg={6}>
						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaToolbox />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Jul/2016 - Sep/2018
								</Typography>
								<Typography variant='h6'> Biomedical Engineer </Typography>
								<Typography variant='h6'> Smama Group, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaToolbox />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Feb/2014 - Jul/2016
								</Typography>
								<Typography variant='h6'> Biomedical Engineer </Typography>
								<Typography variant='h6'> Saad Ahmed Saad EST, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaRegHospital />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Mar/2013 - Dec/2013
								</Typography>
								<Typography variant='h6'> Biomedical Engineer Trainee and Volunteer </Typography>
								<Typography variant='h6'> International Medical Center, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<GiOpenBook />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ p: 0, pt: '12px', pl: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									2007 - 2012
								</Typography>
								<Typography variant='h6'> Medical Equipment Engineering </Typography>
								<Typography variant='h6'> Bachelor Degree </Typography>
							</TimelineContent>
						</TimelineItem>
					</Grid>
				</Grid>
			</Timeline>
		</Fragment>
	);
}
