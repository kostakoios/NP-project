import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({imageLink, name, profession}) {
  return (
    <Card sx={{ maxWidth: 245, marginBottom: '80px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={imageLink}
          sx={{borderRadius: '20px'}}
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {profession}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
