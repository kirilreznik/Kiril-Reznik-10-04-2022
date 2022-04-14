import { styled, Grid } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";
export const MobileSwitchContainer = styled(Grid)`
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
