import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const Contact = () => {
  return (
    <Box style={{border: '4px solid #0dcaf0', borderRadius: '10px', padding: '20px'}} id="Contact">
      <Grid container spacing={3} wrap='wrap' justifyContent='space-around'>
        <Grid container >
            <Grid>
                <h1>Contact Us</h1>
                <p>Phone: (599) 456454</p>
                <p>Email: info@carindustry.com</p>
                <address>Address: Tbilisi, Georgia</address>
                <p>Working Hours: Mon-fri: 9am - 6pm</p>
            </Grid>
        </Grid>
        <Grid wrap='wrap' style={{width: '70%'}}>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2223430986737!2d44.802622475896186!3d41.71572077126006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d301b1c2fe7%3A0x26bb6dde8158fae!2s10%20Grozno%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1727699886069!5m2!1sen!2sge" 
        height="450" 
        width="100%"
        style={{border:0}} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact