import { styled, Grid, Paper } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const MainLayoutContainer = styled(Grid)`
  width: 80%;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
`;

export const HomeLayoutGrid = styled(Grid)`
  @media (max-width: ${mobileSize}px) {
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;

export const ButtonsPaper = styled(({ darkModeOn, ...rest }) => (
  <Paper {...rest} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 260px;
  width: 180px;
  padding: 20px;
  border-radius: 20px;
  transition: 1.2s;
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  background-color: ${({ darkModeOn }) =>
    darkModeOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255,255,255, 0.6)"};

  @media (max-width: ${mobileSize}px) {
    display: none;
  }
`;

export const BottomLayout = styled(Grid)`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${mobileSize}px) {
    justify-content: center;
  }
`;
