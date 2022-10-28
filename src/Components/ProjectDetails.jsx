import React from 'react'
import { Card, CardActionArea, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Link } from '@mui/material';
import { Zoom, Typography } from '@mui/material';
import { Box } from '@mui/system';

import CloseIcon from '@mui/icons-material/Close';





export default function ProjectDetails({open, setOpen, EProjectDetails}) {

   const handleClose = () => {setOpen(false)};



   return (
      <Dialog
         open={open}
         TransitionComponent={Zoom}
         keepMounted
         onClose={handleClose}
         aria-describedby="details-dialog-slide"
      >
         <Box position='absolute' right={10} top={10} >
            <IconButton onClick={handleClose} > <CloseIcon /> </IconButton>
         </Box>

         <DialogTitle color='text.disabled' textTransform='capitalize' fontSize={25} textAlign='center' >{EProjectDetails.title}</DialogTitle>

         <DialogContent>
            <Typography variant="body1" color='text.secondary' > Language and Framework: </Typography>

            <Typography variant="h6" >
               {EProjectDetails.Language && EProjectDetails.Language.join(', ')}
            </Typography>

            <Link href={EProjectDetails.link} target='_blank'  >
               <Card sx={{my:3}} >
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        image={EProjectDetails.img}
                        alt={EProjectDetails.title}
                     />

                  </CardActionArea>
               </Card>
            </Link>

            <Typography variant="body1" color='text.secondary' > Description: </Typography>
            <Typography variant="body1" > {EProjectDetails.description} </Typography>

         </DialogContent>
      </Dialog>
   );
}
