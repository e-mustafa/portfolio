import React, { Fragment, useRef, useState } from 'react'
import { Box, Grid, Paper, Slide, Snackbar, TextField, Typography } from '@mui/material'

import { IoPaperPlane } from "react-icons/io5";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import emailjs from '@emailjs/browser';




export default function ContactForm() {
   const form = useRef();

   const [snackbarState, setSnackbarState] = useState(false);


   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_lp3qp5q', 'template_dc270ak', form.current, 'Q4VgSuu5zR0FYlGeR')
      .then((result) => {
         console.log(result.text);
         if(result.status === 200){
            setSnackbarState(true);
         }
      }, (error) => {
         console.log(error.text);
      });

      e.target.reset()
   };




   return (
      <Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className='animate__animated animate__pulse' >

         <Typography variant='h6' ml={{lg:8}} mb={2}  mt={{xs:8, lg:0}}> Send me a message: </Typography>

         <Box component="form" ref={form} noValidate onSubmit={sendEmail}  ml={{lg:8}} >
            <Grid container spacing={2}>
               <Grid item xs={12} >
                  <TextField
                     autoComplete="given-name"
                     name="user_name"
                     fullWidth
                     id="fullName"
                     label="Full Name"
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
               <Grid item xs={12} >
                     <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="user_email"
                        autoComplete="email"
                        // inputProps={{className:'contact-input'}}
                        // InputLabelProps={{className:'contact-label'}}
                     />
               </Grid>
               <Grid item xs={12} >
                  <TextField
                     fullWidth
                     id="subject"
                     label="Subject"
                     name="subject"
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField  className='contact-input'
                     fullWidth
                     name="message"
                     label="write message"
                     type="text"
                     id="message"
                     multiline
                     rows={4}
                     // minRows={3}
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
            </Grid>


            <Box
             className='project-btn'
             component='button'
             my={3} mx='auto'
             color='text.primary'
             type="submit"
            >
               <Box className='project-btn-icon' ><IoPaperPlane /></Box>
               <Box className='project-btn-text' > SEND MESSAGE</Box>
            </Box>

         </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}







      <Snackbar
       open={snackbarState}
       onClose={() => {setSnackbarState(false)}}
       autoHideDuration={6000}
       TransitionComponent={Slide}
       sx={{ bottom: { xs: 65, md:'24px'} }} // to show up of the bottom navbar not over it
       // message={<Box>  <MdDoneAll />  Message was sent. Thank you to contact with me </Box>}
       children={
         <Paper elevation={4}  sx={{bgcolor:'text.disabled', color:'white', p:1.5, mx:'auto', display:'flex', gap:1}}>
            <TaskAltIcon />
            <span>Message was sent. Thank you to contact.</span>
         </Paper>
       }
      />

      </Fragment>
   )
}
