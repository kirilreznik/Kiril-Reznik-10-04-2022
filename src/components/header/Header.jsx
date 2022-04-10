import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <Box>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        anchorEl={anchorEl}
      />
      <AppBar className="app-header" position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div className="buttons-box">
            <Button>Home</Button>
            <Button>Favorites</Button>
          </div>
          <IconButton
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              setMenuOpen(true);
            }}
            className="menu-button"
            size="large"
            edge="end"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
