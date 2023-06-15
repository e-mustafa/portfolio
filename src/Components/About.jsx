import React from 'react'
import { Avatar, Box, Container, Divider, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import myImage2 from '../Images/my image 02.png'
import myImage3 from "../Images/my imagess 01.png";

import {myPersonalInfo} from './MyProjectsData'
// import {LinearWithLabel} from './ProgressWithLabel'
import Experience from './Experience';

import {  DiJavascript1} from "react-icons/di";
import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaSass} from "react-icons/fa";
import { SiRedux, SiMaterialui, SiNextdotjs } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

import '../Styles/index.css'
import 'animate.css';

import useProgressiveImg from './useProgressiveImg'




export default function About() {

  const [src, { blur }] = useProgressiveImg(myImage3, myImage2);





  return (

    <Container sx={{my:{xs:'12%', lg:'70px'}}}>
      <Stack textTransform='uppercase' mb={6} >

        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800"  letterSpacing={15}
         position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}
         color={(theme) => theme.palette.mode === 'dark' ? '#ffffff12' : '#1e253012' } >
          Resume
        </Typography>

        <Typography fontWeight="900"
         fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          About
          <span  style={{color:'var(--mainPraimary)'}}>  Me</span>
        </Typography>
      </Stack>


      <Grid container spacing={3} >
        <Grid item xs={12} lg={5}  color='text.secondary' >
          <Box display='flex' justifyContent='center' mb={{xs:6, lg:0}} >
            <Avatar
              alt="Mustafa Abutabl Pic"
              src={src}
              sx={{ width: '300px', height: '300px', border:'4px solid #252525', objectFit: 'top',  }}
              style={{
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
             }}
            />
          </Box>
        </Grid>

        {/* ------------------------------------- personal infos ------------------------------ */}
        <Grid item xs={12} lg={7}   >
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' >

            <Typography variant='h5' textTransform='uppercase' > personal infos : </Typography>

            <Box display='flex' flexWrap='wrap' justifyContent='space-between' mt={3} color='text.secondary' >

              {myPersonalInfo && myPersonalInfo.map( e =>
              <Stack flex='0 0 50%'  key={e.id}>

                <Stack direction={{xs:'column', sm:'row'}} mb={1} columnGap={2}>
                  <Typography  color='text.secondary'> {e.title} </Typography>
                  <Typography  fontWeight={900} color={e.color} mr={2}
                   className='animate__animated animate__flipInX'
                  >
                    {e.info}
                  </Typography>
                </Stack>

              </Stack>
              )}

            </Box>
          </Box>


          <Box display='flex' justifyContent={{xs:'center', lg:'left'}} >
            <Link href='./files/MUSTAFA-Abutabl-resume.pdf' target="_blank" download color='#ffffff' underline='none'>
              <Box className='project-btn'  color='text.primary' mt={5} >
                <Box className='project-btn-icon' ><FiDownload /> </Box>
                <Box className='project-btn-text' > Download CV </Box>
              </Box>
            </Link>
          </Box>

        </Grid>
      </Grid>



      <Divider  sx={{bgcolor:'gray', width:'50%', mx:'auto', my:4}} />

      {/* ------------------------------------- Skills ------------------------------ */}
      <Box mt={6} >
        <Typography variant='h5' textTransform='uppercase' fontWeight={700} > Skills : </Typography>

        <Stack direction='row' my={2} color='text.secondary' textAlign='center' gap={2} flexWrap='wrap' className='animate__animated animate__zoomIn'  >
                
          <Box fontSize={60} color='#e56229' bgcolor="action.hover" paddingY="20px" borderRadius='10px'
           flex={{xs:'1 1 40%', lg:'1 1 auto'}} boxShadow={3} sx={{'&:hover': { boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)', transform: 'translateY(-10px)', transition:"all .5s"}}}  >
            <FaHtml5/>
            <Typography variant='body1' fontWeight={700} mb={2} > HTML </Typography>
          </Box>

          <Box fontSize={60} color='#007FFF' bgcolor="action.hover" paddingY="20px" borderRadius='10px'
           flex={{xs:'1 1 40%', lg:'1 1 auto'}} boxShadow={3} sx={{'&:hover': { boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)', transform: 'translateY(-10px)', transition:"all .5s"}}}  >
           <FaCss3Alt/>
            <Typography variant='body1' fontWeight={700} mb={2} > CSS </Typography>
          </Box>

          <Box fontSize={60} color='#EAD41C' bgcolor="action.hover" paddingY="20px" borderRadius='10px'
           flex={{xs:'1 1 40%', lg:'1 1 auto'}} boxShadow={3} sx={{'&:hover': { boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)', transform: 'translateY(-10px)', transition:"all .5s"}}}  >
           <DiJavascript1/>
            <Typography variant='body1' fontWeight={700} mb={2} > JavaScript </Typography>
          </Box>

          <Box fontSize={60} color='#00CEF2' bgcolor="action.hover" paddingY="20px" borderRadius='10px'
           flex={{xs:'1 1 40%', lg:'1 1 auto'}} boxShadow={3} sx={{'&:hover': { boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)', transform: 'translateY(-10px)', transition:"all .5s"}}}  >
           <FaReact/>
            <Typography variant='body1' fontWeight={700} mb={2} > React </Typography>
          </Box>

        </Stack>
      </Box>

      <Divider  sx={{bgcolor:'Divider', width:'50%', mx:'auto', my:4}} />



      <Box my={6} >
        <Typography variant='h5' textTransform='uppercase'  fontWeight={700} mb={2} > Other Skills : </Typography>

        <Box display='flex' flexDirection='row'  gap={3}  flexWrap='wrap' textAlign='center'   >

          <Box fontSize={60} color='#723DBE' flex={{xs:'1 1 auto'}}>
            <FaBootstrap/>
            <Typography variant='body1' color='praimary' mb={2} > Bootstrap </Typography>
          </Box>

          <Box fontSize={60} color='#007FFF' flex={{xs:'1 1 auto'}} >
            <SiMaterialui/>
            <Typography variant='body1' color='praimary' mb={2} > Material Ui </Typography>
          </Box>

          <Box fontSize={60} color='praimary' flex={{xs:'1 1 auto'}} >
            <FaGithub/>
            <Typography variant='body1' color='praimary' mb={2} > Github </Typography>
          </Box>

          <Box fontSize={60} color='#DE4C36' flex={{xs:'1 1 auto'}} >
            <FaGitAlt/>
            <Typography variant='body1' color='praimary' mb={2} > Git </Typography>
          </Box>

          <Box fontSize={60} color='#764ABC' flex={{xs:'1 1 auto'}} >
            <SiRedux/>
            <Typography variant='body1' color='praimary' mb={2} > Redux </Typography>
          </Box>

          <Box fontSize={60} color='#c76494' flex={{xs:'1 1 auto'}} >
          <FaSass />
            <Typography variant='body1' color='praimary' mb={2} > SASS </Typography>
          </Box>

          <Box fontSize={60} color='praimary' flex={{xs:'1 1 auto'}} >
          <SiNextdotjs />
            <Typography variant='body1' color='praimary' mb={2} > Next </Typography>
          </Box>
        </Box>
      </Box>


      <Divider  sx={{bgcolor:'gray', width:'50%', mx:'auto', my:4}} />


      {/* Experience component */}
      <Experience />

    </Container>
  )
}
