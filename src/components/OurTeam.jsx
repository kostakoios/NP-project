import React from 'react'
import ActionAreaCard from './ActionAreaCard'
import Box from '@mui/material/Box';

const OurTeam = () => {
    const ourTemDetails = [{
        img: 'https://r.mobirisesite.com/697320/assets/images/photo-1607556114526-058f5efdf49e.jpeg',
        artistName: 'Mike',
        profession: 'Chief Mechanic'
    },
    {
        img: 'https://r.mobirisesite.com/697320/assets/images/photo-1677520338280-664ae23816eb.jpeg',
        artistName: 'Lisa',
        profession: 'Interior Specialist'
    },
    {
        img: 'https://r.mobirisesite.com/697320/assets/images/photo-1535026406642-530e01750ad7.jpeg',
        artistName: 'Tom',
        profession: 'Quality Control'
    },
    {
        img: 'https://r.mobirisesite.com/697320/assets/images/photo-1485811661309-ab85183a729c.jpeg',
        artistName: 'Sara',
        profession: 'Customer Happiness'
    }]
    return (
        <div style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <b style={{ textAlign: 'center', fontSize: '45px', margin: '50px 0' }}>Our Crew</b>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
             {ourTemDetails.map((object, index) => {
                return <ActionAreaCard key={index} imageLink={object.img} name={object.artistName} profession={object.profession}/>
             })}
            </Box>
        </div>
    )
}

export default OurTeam
