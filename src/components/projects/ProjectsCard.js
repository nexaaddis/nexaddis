import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";

const ProjectsCard = ({ image, title, category }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: { xs: '400px', sm: '300px', md: '350px' },
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#f7f7f7',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ position: 'relative', height: '70%' }}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          sx={{
            height: '100%',
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              color: '#fb8122',
              transition: 'color 0.3s',
              '&:hover': { color: '#ff6347' },
            }}
            aria-label="Live Preview"
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
      </Box>
      <CardContent sx={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: { xs: '16px', sm: '20px', md: '24px' } }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#333333',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#666666',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
          }}
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
