import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBlob = ({ x, y, size, color, isHovered }) => {
  const [props, api] = useSpring(() => ({
    transform: `translate(${x}px, ${y}px) scale(1)`,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  useEffect(() => {
    api.start({
      transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1.5 : 1})`,
      config: { mass: 1, tension: 170, friction: 26 }
    });
  }, [x, y, isHovered, api]);

  return (
    <animated.div
      style={{
        ...props,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        position: 'absolute',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}
    />
  );
};

const Design = () => {
  const [blobs, setBlobs] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const numBlobs = 15;
    const colors = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 0, 0.5)'];
    const newBlobs = Array.from({ length: numBlobs }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: `${Math.random() * 150 + 50}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBlobs(newBlobs);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        background: 'linear-gradient(45deg, #070707, #0d0c0c, #121212)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        zIndex: -1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
        `}
      </style>
      {blobs.map((blob, index) => (
        <AnimatedBlob
          key={index}
          x={mousePosition.x}
          y={mousePosition.y}
          size={blob.size}
          color={blob.color}
          isHovered={hovered}
        />
      ))}
    </div>
  );
};

export default Design;


// import React from 'react';
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";
// import { Box } from "@mui/material";

// const Design = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         top: '0',
//         right: '0',
//         width: '100%',
//         height: '100%',
//         background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))', // Black gradient background
//         overflow: 'hidden',
//         zIndex: -1,
//       }}
//     >
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: "#000000",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 1,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.2,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </Box>
//   );
// };

// export default Design;
