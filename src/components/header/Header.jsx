import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import MobileMenu from "../mobile-menu/MobileMenu";
import appLogo from "../../assets/appLogo.svg";

export default function Header() {
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  return (
    <Box>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        anchorEl={anchorEl}
      />
      <AppBar className="app-header" position="static" elevation={0}>
        <Toolbar className="toolbar">
          <img src={appLogo} className="logo"></img>
          <div className="buttons-box">
            <Button
              style={{ color: "white", fontWeight: "bold" }}
              size="large"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              style={{ color: "white", fontWeight: "bold" }}
              size="large"
              onClick={() => {
                navigate("/favorites");
              }}
            >
              Favorites
            </Button>
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
