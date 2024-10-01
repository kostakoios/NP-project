import React from 'react'
import Button from '@mui/material/Button';

const MainHeader = () => {
    return (
        <div style={{position: 'absolute', bottom: '50px', left: '20px'}}>
            <h1 style={{ color: '#ffc091', fontSize: '60px', margin: 0 }}>
                <b>Car Revival</b>
            </h1>
            <p style={{ color: '#fff', fontFamily: 'Manrope', fontSize: '1.5rem' }}>
                Transforming your car's interior from drab to fab, one stitch at a time!</p>
            <Button sx={{    color: '#fff',
                border: '1px solid #fff',
                borderRadius: '40px',
                fontSize: '20px',
                padding: '10px 20px' }}variant="outlined" size="large">
            See our work
          </Button>
     
        </div>
    )
}

export default MainHeader
