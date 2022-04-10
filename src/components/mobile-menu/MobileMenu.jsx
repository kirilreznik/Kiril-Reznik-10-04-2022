import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import "./MobileMenu.css";
export default function MobileMenu({ isMenuOpen, setMenuOpen, anchorEl }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Menu
        className="mobile-menu"
        open={isMenuOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/favorites");
            handleClose();
          }}
        >
          Favorites
        </MenuItem>
      </Menu>
    </div>
  );
}
