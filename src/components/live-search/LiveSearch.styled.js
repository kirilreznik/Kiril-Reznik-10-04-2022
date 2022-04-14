import { styled, Autocomplete } from "@mui/material";
import { mobileSize } from "../../utils/screen-sizes";

export const StyledAutocomplete = styled(({ darkModeOn, ...rest }) => (
  <Autocomplete {...rest} />
))`
  width: 40%;
  margin: auto;
  padding-inline-end: 20px;
  padding-inline-start: 20px;
  @media (max-width: ${mobileSize}px) {
    width: 100%;
    padding: 0;
    margin-top: 15px;
  }

  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    border: 0.5px solid;
    border-color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  }
  & label.Mui-focused {
    border: none;
    color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};
  }
  & .MuiOutlinedInput-root {
    color: ${({ darkModeOn }) => (darkModeOn ? "white" : "black")};

    &.Mui-focused fieldset {
      border: none;
    }
  }
`;
