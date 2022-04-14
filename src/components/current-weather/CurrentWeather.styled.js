import { styled, Paper } from "@mui/material";

export const CurrentWeatheContainer = styled(({ darkModeOn, ...rest }) => (
  <Paper {...rest} />
))`
  height: 260px;
  width: 180px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 1.2s;
  color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  background-color: ${({ darkModeOn }) =>
    darkModeOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255,255,255, 0.6)"};
`;
