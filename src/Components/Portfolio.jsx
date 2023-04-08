import React, { useState } from 'react'
import { Box, Card, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'

import '../Styles/Portfolio.css'
import 'animate.css';

// import axios from 'axios'
import {myProjects} from './MyProjectsData'
import ProjectDetails from './ProjectDetails';



export default function Projects() {

  const [open, setOpen] = useState(false);
  const [EProjectDetails, setProjectDetails] = useState({});


  const [repos, setRepos] = useState(myProjects)
  const [filtertype, setFiltertype] = useState('All')


  // const getRepos = async ()=>{
  //   const res = await axios.get(`https://api.github.com/users/e-mustafa/repos`)
  //   .catch((error) =>{
  //     console.log(error);
  //   })
  //   setRepos(res.data)
  //   console.log(res);
  // }


  // const getRepo1 = async ()=>{
  //   const res = await axios.get(`https://api.netlify.com/api/v1/sites/51d8d2a3-f32c-4f64-bbd2-ad12cad17b60`)
  //   .catch((error) =>{
  //     console.log(error);
  //   })
  //   // setRepos(res.data)
  //   console.log(res);
  // }


  // useEffect(()=>{
  //   // getRepos()
  //   // getRepo1()

  // },[])


  const handelFilter = (e) =>{
    setRepos(myProjects.filter(v => v.Language.includes(e.currentTarget.attributes.value.value)));
    setFiltertype(e.currentTarget.attributes.value.value)
  }


  return (


    <div>
    <Container sx={{my:{xs:'12%', lg:'70px'}}}>
      <Stack textTransform='uppercase' mb={6} >

        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800"  letterSpacing={15}
         position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}
         color={(theme) => theme.palette.mode === 'dark' ? '#ffffff12' : '#1e253012' }>
          Works
        </Typography>

        <Typography fontWeight="900"
         fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          My
          <span style={{color:'var(--mainPraimary)'}} > Portfolio</span>
        </Typography>
      </Stack>


      <Stack direction='row' gap={{xs:2, md:4}} justifyContent='center' mt={10} mb={4} >
        <Typography  className={`project-type ${filtertype === 'All' && 'project-type-active'}`}
         onClick={()=> {setRepos(myProjects);
         setFiltertype('All')
         }} >
          All
        </Typography>

        <Typography  className={`project-type ${filtertype === 'CSS' && 'project-type-active'}`}
         onClick={()=> {
          setRepos(myProjects.filter(e => !e.Language.includes('Javascript', 'React')));
          setFiltertype('CSS')
          }} >
          CSS
        </Typography>

        <Typography  className={`project-type ${filtertype === 'Javascript' && 'project-type-active'}`}
         value='Javascript'onClick={(e)=> handelFilter(e) } >
          Javascript
        </Typography>

        <Typography  className={`project-type ${filtertype === 'React' && 'project-type-active'}`}
         value='React' onClick={(e)=> handelFilter(e) }>
          React
        </Typography>
      </Stack>







      <Grid container spacing={3} className='animate__animated animate__zoomIn' >
        {repos && repos.map(e =>
          <Grid item xs={12} md={6} lg={4}  key={e.id} sx={{position: 'relative'}} >
            <Card className="flip-card"
             onClick={()=> {setOpen(true); setProjectDetails(e)}} >

              <Box className="flip-card-inner">
                {/* when hover over card show next box */}
                <CardMedia className="flip-card-front"
                  component="img"
                  image={e.img} alt={e.title} 
                  sx={{objectPosition: "top"}}
                />


                <Box className="flip-card-back" >
                  <Typography variant="h6" color='white' > {e.title} </Typography>
                  {/* <Typography variant="h6" > {e.description} </Typography> */}
                </Box>
              </Box>
            </Card>
          </Grid>
        )}
      </Grid>

    </Container>

    <ProjectDetails open={open} setOpen={setOpen} EProjectDetails={EProjectDetails} />

  </div>
  )
}
