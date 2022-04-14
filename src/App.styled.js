import { styled } from "@mui/material";
import background from "./assets/bacground.jpg";

export const AppContainer = styled(({ darkModeOn, ...rest }) => (
  <div {...rest} />
))`
  background-image: ${({ darkModeOn }) =>
      darkModeOn
        ? `linear-gradient(
    rgb(8, 14, 44, 1),
    rgb(8, 14, 44, 1),
    rgba(8, 14, 44, 0.8),
    rgba(8, 14, 44, 0.7),
    rgba(8, 14, 44, 0.3),
    rgba(8,14,44, 0.3)
  )`
        : `linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.9),
    rgb(255, 255, 255, 1),
    rgb(255, 255, 255, 1)
  )`},
    url(${background});
  min-height: 100vh;
  transition: all 1.2s;
`;
