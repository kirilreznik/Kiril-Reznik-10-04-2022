import { styled } from "@mui/material";
import background from "./assets/bacground.jpg";

export const AppContainer = styled("div")`
  background-image: ${(props) => props.backgroundColor}, url(${background});
  min-height: 100vh;
`;
