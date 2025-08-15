import { Container, Grid, Link, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import '../Styles/Contact.css';
import ContactForm from './ContactForm';
import { myContactInfo, mySocialContact } from './MyProjectsData';
import SocialContact from './SocialContact';

const Contact = () => {
	return (
		<Container sx={{ my: { xs: '12%', lg: '70px' } }}>
			<Stack textTransform='uppercase' mb={6}>
				<Typography
					fontSize={{ xs: '30px', lg: '100px' }}
					fontWeight='800'
					letterSpacing={15}
					position='absolute'
					top={40}
					left={{ xs: 5, lg: '50%' }}
					sx={{ transform: 'translateX(-50%)' }}
					color={(theme) => (theme.palette.mode === 'dark' ? '#ffffff12' : '#1e253012')}
				>
					Contact
				</Typography>
				<Typography fontWeight='900' fontSize={{ xs: '25px', lg: '60px' }} textAlign={{ xs: 'left', lg: 'center' }}>
					get in <span style={{ color: 'var(--mainPrimary)' }}>touch</span>
				</Typography>
			</Stack>

			<Box>
				<Typography fontSize={{ xs: '25px', lg: '25px' }} textAlign={{ xs: 'center', lg: 'left' }} mb={3}>
					Get in touch!
				</Typography>
			</Box>

			<Grid container>
				<Grid item lg={4}>
					<Stack textTransform='capitalize' height='100%' direction='column' justifyContent='space-between'>
						<Typography fontWeight='700' fontSize='15px' textAlign='justify' mb={4}>
							Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
							opportunities to be part of your visions.
						</Typography>

						{myContactInfo?.length &&
							myContactInfo.map((item) => (
								<Stack key={item.id} display='flex' flexDirection='row' alignItems='center' gap={2} mb={4}>
									<Stack fontSize={30} color='text.disabled'>
										<item.icon />
									</Stack>

									<Stack fontSize={30} textAlign='left'>
										<Typography capitalize> {item.title} </Typography>

										{item.link ? (
											<Link
												href={item.link}
												underline='hover'
												sx={{ color: 'text.praimary', textTransform: 'lowercase' }}
												fontSize={15}
											>
												{item.info}
											</Link>
										) : (
											<Typography fontSize={15}>{item.info}</Typography>
										)}
									</Stack>
								</Stack>
							))}

						{/* social icons */}
						<SocialContact data={mySocialContact} />
					</Stack>
				</Grid>

				<Grid item lg={7}>
					<ContactForm />
				</Grid>
			</Grid>
		</Container>
	);
};
export default Contact;
