import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


const SocialMedia = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#fff', padding: '70px 0' }} >
            <Grid container spacing={2} justifyContent="center" >
                <Grid size={12} textAlign='center'>
                    <h1 style={{ fontSize: '65px', marginTop: 0 }}>Join Our Car Revolution!</h1>
                </Grid>

                <Grid>
                    <Link href="#" underline="none">
                        <FacebookIcon color="primary" sx={{ fontSize: 60 }} />
                    </Link>
                </Grid>
                <Grid>
                    <Link href="#" underline="none">
                        <XIcon sx={{ fontSize: 60 }} />
                    </Link>
                </Grid>
                <Grid>
                    <Link href="#" underline="none">
                        <InstagramIcon sx={{ color: 'red', fontSize: 60 }} />
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SocialMedia
