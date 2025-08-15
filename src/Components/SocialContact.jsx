import { Box, Stack, Tooltip } from "@mui/material";

export default function SocialContact({data = []}) {
   return (
      <Stack
         display='flex'
         flexDirection='row'
         alignItems='center'
         gap={2}
         justifyContent={{ xs: 'center', lg: 'left' }}
         className='animate__animated animate__zoomIn'
      >
         {data && data.map((item) => (
            <Tooltip key={item.id}  title={item.title} arrow>
               <a href={item.link} target='_blank' rel='noopener' >
                  <Box className='social-icons' bgcolor='action.disabledBackground' color='text.disabled' sx={{ '&:hover': { color: 'text.white' } }} >
                     <item.icon/>
                  </Box>
               </a>
            </Tooltip>
         ))}
      </Stack>
   )
}
