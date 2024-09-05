import React, { useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { HashLink as Link } from "react-router-hash-link";

// Components
import Footer from "../../components/Sections/Footer";
import Contact from "../../components/Contact/Contact";

// Assets
import { webCard3, webBg1, webCard1, webCard2 } from "../../assets";

// Img data
const cardData = [
  {
    image: webCard1,
    title: "E-commerce",
    description: "Build a secure and easy-to-use online shop. Perfect for small and big businesses to sell products and reach more customers.",
  },
  {
    image: webCard2,
    title: "Restaurant & Café",
    description: "Build an inviting online presence for your restaurant or café. Share your menu, daily specials, and keep them coming back for more.",
  },
  {
    image: webCard3,
    title: "Company Website",
    description: "Develop a clean and professional company website. Show your brand, services, and values to connect with your audience.",
  },
];


const WebsiteDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor="#f1f1f1">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "90vh", md: "75vh" },
          backgroundImage: `url(${webBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e1e2e2",
          textAlign: "center",
          px: 2,
          pt: { xs: "5rem", md: "6rem" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(1, 1, 1, .7)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.6rem", md: "2.5rem" },
              color: "#e1e2e2",
              fontFamily: "Roboto, sans-serif",
              mb: {xs: 4, md: 2}
            }}
          >
            Empowering Your Business with Stunning Websites
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#e1e2e2",
              mb: 4,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            We design and develop functional, beautiful websites that help you reach your
            goals.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              border: "1px solid #fb8122",
              borderRadius: '12px',
              color: "#fff",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #fb8122",
              },
              mt: 3,
              px: 4,
              py: 1,
            }}
            component={Link}
            to="#contact"
          >
            Let's Talk
          </Button>
        </Box>
      </Box >

      {/* Main Content */}
      < Container
        maxWidth="lg"
        sx={{
          mt: 5,
          mb: 5,
          py: 3,
          color: "#333",
        }
        }
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.6rem", md: "2rem" },
            mb: 3,
            fontFamily: "Roboto, sans-serif",
            color: "#333",
          }}
        >
          Why a Good Website Matters?
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 4, color: "#555" }}>
          In Ethiopia, where digital transformation is rapidly growing, your website is often the first impression customers have of your business. A well-crafted website not only attracts visitors but also convinces them to engage with your services. From aesthetics to functionality, good web design ensures a seamless and satisfying user experience.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            mb: 2,
            color: "#333",
          }}
        >
          Key Aspects of Web Design:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          {[
            {
              title: "User Experience (UX)",
              description:
                "Creating intuitive, easy-to-navigate websites that make your visitors' journey enjoyable.",
            },
            {
              title: "Visual Design",
              description:
                "We ensure that your site reflects your brand with appealing visuals, appropriate color schemes, and fonts that resonate with your audience.",
            },
            {
              title: "Responsive Design",
              description:
                "Your website will be optimized for all devices, ensuring a perfect look and functionality on smartphones, tablets, and desktops.",
            },
            {
              title: "Performance",
              description:
                "Fast, reliable, and efficient websites reduce bounce rates and keep users engaged.",
            },
          ].map((aspect, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                {aspect.title}:
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                {aspect.description}
              </Typography>
            </li>
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            mb: 3,
            color: "#333",
          }}
        >
          Our Web Development Process
        </Typography>

        <Box sx={{ pl: 3 }}>
          {[
            {
              step: "1. Planning and Discovery",
              description:
                "Understanding your business goals, audience, and unique needs to create a tailored website plan.",
            },
            {
              step: "2. Design",
              description:
                "Crafting wireframes and visual designs that align with your brand's goals and user expectations.",
            },
            {
              step: "3. Development",
              description:
                "Building robust, scalable websites using the latest technologies to ensure performance and security.",
            },
            {
              step: "4. Testing",
              description:
                "Rigorous testing on all devices and browsers to ensure a flawless user experience.",
            },
            {
              step: "5. Launch",
              description:
                "Deploying your website with all the necessary configurations, followed by continuous support and updates.",
            },
          ].map((process, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                {process.step}:
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", pl: 2 }}>
                {process.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 6, px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.4rem", md: "1.6rem" },
              mb: 3,
              color: "#333",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 4, color: "#555" }}>
            At our company, we understand the Ethiopian market and the unique challenges faced by local businesses. We offer:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 4 }}>
            {[
              {
                title: "Customized Solutions",
                description: "Tailored designs that reflect your brand and appeal to your target audience.",
              },
              {
                title: "Expertise and Experience",
                description: "A team of skilled professionals who are passionate about web development and committed to delivering quality work.",
              },
              {
                title: "Competitive Pricing",
                description: "High-quality services that fit within your budget, helping you get the best return on your investment.",
              },
              {
                title: "Ongoing Support",
                description: "We don't just build websites; we provide ongoing support to ensure your site remains up-to-date and effective.",
              },
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                  {item.title}:
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {item.description}
                </Typography>
              </li>
            ))}
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", md: "1.6rem" },
              mb: 3,
              color: "#333",
            }}
          >
            Visual Examples of Our Work
          </Typography>

          <Box style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
              <Card key={index} sx={{ maxWidth: 345, position: 'relative' }}>
                <CardMedia
                  sx={{ height: "180px" }}
                  image={card.image}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingTop: '2rem' }}>
                  <Link
                    to="/#projects"
                    smooth
                    style={{
                      position: 'absolute',
                      bottom: '5%',
                      left: '3%',
                      textDecoration: "none",
                      color: "white",
                      mt: 1,
                    }}
                  >
                    <Button
                      size="small"
                      sx={{ color: "#fb8122" }}
                    >
                      see our projects
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Container >

      < Contact />
      < Footer />
    </Box >
  );
};

export default WebsiteDesignPage;
