import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";

// assets
import { mainLogo } from "../../assets";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const navigate = useNavigate();

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate blurry-bg-navbar" style={y > 100 ? { height: "62px" } : { height: "72px" }}>
        <NavInner className="container flexSpaceCenter">
          <LinkWrapper to="/#home" smooth onClick={() => navigate('/#home')}>
            <Box
              component="img"
              src={mainLogo}
              alt="Nexaddis"
              sx={{
                width: { xs: "100px", md: "120px" },
                height: "auto",
              }}
            />
          </LinkWrapper>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {["home", "services", "about", "projects", "testimonial"].map((section) => (
              <li key={section} className="semiBold font15 pointer nav-link">
                <StyledLink
                  smooth
                  to={section === "about" ? `/${section}` : `/#${section}`}
                  spy="true"
                  offset={-80}
                  duration={500}
                >
                  {section}
                </StyledLink>
              </li>
            ))}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <Button
              sx={{
                margin: '0 auto',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-color)',
                outline: 'none',
                width: { xs: '100px', lg: '130px' },
                padding: { xs: '4px auto', lg: '5px auto' },
                fontWeight: '500',
                fontSize: { xs: '0.8rem', sm: '0.9rem', lg: '1rem' },
                color: '#ffffff',
                textTransform: 'capitalize',
                "&:hover": {
                  backgroundColor: '#ca6314',
                  color: '#fff',
                },
              }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  margin: auto 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: #000;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #ca6314;
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: #fb8122;
    &::before {
      width: 100%;
      background-color: #fb8122;
    }
  }
`;
