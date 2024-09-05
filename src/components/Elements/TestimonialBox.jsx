import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function TestimonialBox({ text, author, imgSrc }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "220px",
        padding: { xs: "15px", sm: "20px", md: "30px", lg: "40px" },
        marginTop: { xs: "15px", sm: "20px", md: "25px" },
        marginBottom: { xs: "15px", sm: "20px", md: "25px" },
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "var(--bg-hover-color)",
        "@media (max-width: 600px)": {
          minHeight: "300px",
        },
        "@media (min-width: 600px) and (max-width: 960px)": {
          minHeight: "240px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: { xs: "10px", sm: "15px", md: "20px" },
        }}
      >
        <Avatar
          alt={author}
          src={imgSrc}
          sx={{
            width: { xs: "50px", sm: "60px", md: "70px" },
            height: { xs: "50px", sm: "60px", md: "70px" },
            marginRight: { xs: "10px", sm: "15px" },
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            color: "var(--hover-primary-color)",
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
          }}
        >
          <em>{author}</em>
        </Typography>
      </Box>

      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
            lineHeight: 1.5,
            color: "#555",
            paddingRight: { xs: "0px", sm: "10px", md: "20px" },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
