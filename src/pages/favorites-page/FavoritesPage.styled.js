import { styled, Grid, Paper } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const SwitchesContainer = styled(Grid)`
  margin-bottom: 20px;
  @media (max-width: ${mobileSize}px) {
    display: none;
  }
`;

export const SwitchesPaper = styled(Paper)`
  max-width: fit-content;
  block-size: fit-content;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ background }) => background};
`;

export const FavoritesContainer = styled(Grid)`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
