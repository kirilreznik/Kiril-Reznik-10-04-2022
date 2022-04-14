import { styled, Paper } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const ForecastCardPaper = styled(({ darkModeOn, ...rest }) => (
  <Paper {...rest} />
))`
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  background-color: ${({ darkModeOn }) =>
    darkModeOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255,255,255, 0.6)"};
  height: 220px;
  width: 160px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1.2s;
  justify-content: space-between;
  border-radius: 20px;
  :hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: ${mobileSize}px) {
    margin: 10px;
  }
`;
