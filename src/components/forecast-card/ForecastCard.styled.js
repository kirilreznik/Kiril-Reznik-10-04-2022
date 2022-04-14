import { styled, Paper } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";
export const ForecastCardPaper = styled(Paper)`
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
  @media only screen and (max-width: ${mobileSize}) {
    .forecast-paper {
      margin: 10px;
    }
  }
`;
