import React from "react";
import { Box } from "@mui/material";

const VideoComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "80%",
          height: "0",
          paddingBottom: "45%", // Maintain 16:9 aspect ratio
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/jRipuL7hOfU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "-20%", // Hide the top 20%
            left: "0",
            width: "100%",
            height: "140%", // Increase height to show only 60%
          }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default VideoComponent;
