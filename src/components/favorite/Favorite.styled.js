import { styled, Paper } from "@mui/material";

export const FavoritePaper = styled(({ darkModeOn, ...rest }) => (
  <Paper {...rest} />
))`
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  background-color: ${({ darkModeOn }) =>
    darkModeOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255,255,255, 0.6)"};
  margin: 20px;
  height: 220px;
  width: 160px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1.2s;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
