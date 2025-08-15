import { Box, Stack, Tooltip } from '@mui/material';

export default function SocialContact({ data = [] }) {
	const handleClick = (e, link) => {
		e.preventDefault();
		window.open(link, '_blank', 'noopener');
		// if (item.link.includes('linkedin.com')) {}
	};

	return (
		<Stack
			display='flex'
			flexDirection='row'
			alignItems='center'
			gap={2}
			justifyContent={{ xs: 'center', lg: 'left' }}
			className='animate__animated animate__zoomIn'
		>
			{data &&
				data.map((item) => (
					<Tooltip key={item.id} title={item.title} arrow>
						<a onClick={(e) => handleClick(e, item.link)} href={item.link} target='_blank' rel='noopener noreferrer'>
							<Box
								className='social-icons'
								bgcolor='action.disabledBackground'
								color='text.disabled'
								sx={{ '&:hover': { color: 'text.white' } }}
							>
								<item.icon />
							</Box>
						</a>
					</Tooltip>
				))}
		</Stack>
	);
}
