import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function FullButton({ title, action, border }) {
  return (
    <StyledButton
      variant={border ? "outlined" : "contained"}
      onClick={action ? () => action() : null}
      border={border ? 1 : 0}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({ theme, border }) => ({
  width: "100%",
  padding: "15px",
  borderColor: border ? "#ff5722" : "#ff5722",
  backgroundColor: border ? "transparent" : "#ff5722",
  color: border ? "#ff5722" : "#fff",
  fontSize: "16px",
  transition: "all 0.3s ease-in-out",
  borderRadius: "12px",

  "&:hover": {
    backgroundColor: border ? "transparent" : "#e64a19",
    borderColor: "#ff5722",
    color: border ? "#ff5722" : "#fff",
  },

  // Responsive Design
  [theme.breakpoints.down("sm")]: {
    padding: "9px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "8px",
    fontSize: "10px",
  },
}));
