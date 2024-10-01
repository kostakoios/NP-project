import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const TotalActivity = () => {
    const styleItems = {
        color: '#FF6700',
        textAlign: 'center',
        fontSize: '80px',
        fontFamily: 'Manrope, sans-serif',
        marginBottom: 0,
        marginTop: 0
    }

    const titleIems = {
        color: '#000',
        fontSize: '24px',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 0
    }
  return (
    <Box sx={{ flexGrow: 1,  background: '#FFF' }}>
    <Grid container spacing={2}  style={{padding: '50px 0'}}>
      <Grid size={{ xs: 12, md: 4 }}>
          <h2 style={styleItems}>100+</h2>
          <p style={titleIems}>Happy Customers</p>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
           <h2 style={styleItems}>50+</h2>
           <p style={titleIems}>Cars Revived</p>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
      <h2 style={styleItems}>10+</h2>
      <p style={titleIems}>Years Experience</p>
      </Grid>
    </Grid>
  </Box>
  )
}

export default TotalActivity
