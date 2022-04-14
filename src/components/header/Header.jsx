import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../mobile-menu/MobileMenu";
import appLogo from "../../assets/appLogo.svg";
import appLogoLight from "../../assets/appLogoLight.svg";
import {
  AppHeader,
  AppToolbar,
  AppLogo,
  MenuButton,
  ButtonBox,
  HeaderButton,
} from "./Header.styled";

export function Header() {
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
      <AppHeader elevation={0}>
        <AppToolbar>
          <AppLogo src={darkModeOn ? appLogoLight : appLogo} />
          <ButtonBox>
            <HeaderButton
              darkModeOn={darkModeOn}
              size="large"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </HeaderButton>
            <HeaderButton
              darkModeOn={darkModeOn}
              size="large"
              onClick={() => {
                navigate("/favorites");
              }}
            >
              Favorites
            </HeaderButton>
          </ButtonBox>
          <MenuButton
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              setMenuOpen(true);
            }}
            size="large"
            edge="end"
            aria-label="menu"
          >
            <MenuIcon style={{ color: "white" }} />
          </MenuButton>
        </AppToolbar>
      </AppHeader>
    </Box>
  );
}

export default Header;
