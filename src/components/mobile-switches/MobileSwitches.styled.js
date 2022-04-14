import { styled, Grid } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const MobileSwitchContainer = styled(({ darkModeOn, ...rest }) => (
  <Grid {...rest} />
))`
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  background-color: ${({ darkModeOn }) =>
    darkModeOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255,255,255, 0.6)"};
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  border-radius: 20px;
  display: none;
  @media (max-width: ${mobileSize}px) {
    display: flex;
    width: fit-content;
  }
`;
