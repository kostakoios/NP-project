import React from 'react';
import Box from '@mui/material/Box';
import MainHeader from './MainHeader';

const FirstBox = () => {
  return (
    <div style={{position: 'relative'}} id="Home">
      <Box sx={{ height: '100vh', position: 'relative', overflow: 'hidden', width: '100%' }} >
        <iframe class="mbr-background-video" id="ytplayer-3606f4"
        style={{
          position: 'absolute', 
          top: '-12%', // Move the video up by 10%
          left: '-25%', 
          width: '120vw', 
          height: '120vh', // Increase height to 120% to show middle 80%
          border: 'none' // Remove any border around the video
        }} 
        allowFullScreen 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        title="Free Porsche sports car background video for TikTok - quotes, money, rich lifestyle" 
        src="https://www.youtube.com/embed/jRipuL7hOfU?autoplay=1&mute=1&controls=0&loop=1&playlist=jRipuL7hOfU&enablejsapi=1&iv_load_policy=3&modestbranding=1&origin=https%3A%2F%2Fa.mobirise.com&rel=0&showinfo=0&html5=1"
      >
        </iframe>
      </Box>

      <MainHeader />

    </div>
  );
}

export default FirstBox;