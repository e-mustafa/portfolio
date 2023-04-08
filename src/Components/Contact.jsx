import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { FaMap, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaGithub } from "react-icons/fa";
import '../Styles/Contact.css'
import ContactForm from './ContactForm';





const Contact = () => {


  return (

    <Container sx={{my:{xs:'12%', lg:'70px'}}}   >
      <Stack textTransform='uppercase' mb={6} >
        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800"  letterSpacing={15}
          position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}
          color={(theme) => theme.palette.mode === 'dark' ? '#ffffff12' : '#1e253012' }>
          Contact
        </Typography>
        <Typography fontWeight="900"
        fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          get in  <span style={{color:'var(--mainPraimary)'}} >touch</span>
        </Typography>
      </Stack>


        <Box  >
          <Typography  fontSize={{xs:'25px', lg:'25px'}}  textAlign={{xs:'center', lg:'left'}} mb={3} >
            DON'T BE SHY !
          </Typography>
        </Box>


      <Grid  container>
        <Grid item  lg={4}  >
          <Stack  textTransform='capitalize' height='100%' direction='column' justifyContent='space-between'>
            <Typography fontWeight="700" fontSize='15px'  textAlign='justify' mb={4}  >
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
              or opportunities to be part of your visions.
            </Typography>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={4} >
              <Stack fontSize={40} color='text.disabled' > <FaMap /> </Stack>

              <Stack fontSize={40} textAlign='left' >
                <Typography> Address point </Typography>
                <Typography> Cairo - Egypt </Typography>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={4} >
              <Stack fontSize={30} color='text.disabled' > <FaEnvelopeOpen /> </Stack>

              <Stack fontSize={30} textAlign='left' >
                <Typography> Mail Me </Typography>

                <Link href='mailto:eng.mustafax@gmail.com' underline="hover"  sx={{color:'text.praimary', textTransform: 'lowercase'}}   fontSize={15}>
                  Eng.mustafa@hotmail.com
                </Link>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={4} >
              <Stack fontSize={40} color='text.disabled' > <FaPhoneAlt /> </Stack>

              <Stack textAlign='left' >
                <Typography > Call Me </Typography>
                <Link href='tel:+201119706667' underline="hover"  sx={{color:'text.praimary'}} >
                +20 111 970 6667
                </Link>
                <Link href='tel:+201091278812' underline="hover" sx={{color:'text.praimary'}} >
                  +20 109 127 8812
                </Link>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={3}
              justifyContent={{xs:'center', lg:'left'}} className='animate__animated animate__zoomIn'>

              <Link href='https://web.facebook.com/my.6000' target='_blank' >
                <Box className='social-icons' bgcolor='action.disabledBackground'  > <FaFacebookF /> </Box>
              </Link>

              <Link href='https://www.linkedin.com/in/e-mustafa' target='_blank' >
                <Box className='social-icons' bgcolor='action.disabledBackground'  > <FaLinkedinIn /> </Box>
              </Link>

              <Link href='https://wa.me/+201119706667' target='_blank' >
                <Box className='social-icons' bgcolor='action.disabledBackground'  > <FaWhatsapp /> </Box>
              </Link>

              <Link href='https://t.me/eng_noo' target='_blank' >
                <Box className='social-icons' bgcolor='action.disabledBackground'  > <FaTelegramPlane /></Box>
              </Link>

              <Link href='https://github.com/e-mustafa' target='_blank' >
                <Box className='social-icons' bgcolor='action.disabledBackground' > <FaGithub /></Box>
              </Link>

            </Stack>

          </Stack>
        </Grid>

        <Grid item lg={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Contact ;