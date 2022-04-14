import { styled, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const AppHeader = styled(AppBar)`
  position: static;
  background-color: transparent;
  margin-bottom: 40px;
`;
export const AppToolbar = styled(Toolbar)`
  width: 88%;
  margin: auto;
  justify-content: space-between;
  padding-top: 10px;

  align-items: flex-end;
`;
export const AppLogo = styled("img")`
  height: 65px;
  display: flex;
`;
export const MenuButton = styled(IconButton)`
  @media (min-width: ${mobileSize}px) {
    display: none;
    color: white;
  }
`;
export const ButtonBox = styled("div")`
  @media (max-width: ${mobileSize}px) {
    display: none;
  }
`;

export const HeaderButton = styled(({ darkModeOn, ...rest }) => (
  <Button {...rest} />
))`
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  font-weight: bold;
  font-size: 20px;
`;
