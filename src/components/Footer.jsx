import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, background: '#000', padding: '30px 0' }} >
      <Grid container direction='column'>
        <Grid container spacing={2} justifyContent='center'>
          <Grid>
            <h1>          
            <a href='#Home' style={{textDecoration: 'none', color: '#fff'}}>Home</a>
            </h1>
          </Grid>

          <Grid>
          <h1>
          <a href='#Services' style={{textDecoration: 'none', color: '#fff'}}>Services</a>
          </h1>

          </Grid>

          <Grid>
          <h1>
          <a href='#About' style={{textDecoration: 'none', color: '#fff'}}>About</a>
          </h1>

          </Grid>

          <Grid>
          <h1>
          <a href='#Contact' style={{textDecoration: 'none', color: '#fff'}}>Contact</a>
          </h1>

          </Grid>
        </Grid>
        <Grid container justifyContent='center' textAlign='center'>
          <address style={{color: '#fff', fontSize: '20px'}}>© 2024 Car Interior Fixers. All rights reserved.</address>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
