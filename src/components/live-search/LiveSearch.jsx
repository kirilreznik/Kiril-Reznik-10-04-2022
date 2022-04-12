import { Autocomplete, TextField, Box, CircularProgress } from "@mui/material";
import { useEffect, useState, Fragment } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import { setError } from "../../redux/slices/errorsSlice";
import API_KEY from "../../utils/constants";
import "./LiveSearch.css";

function LiveSearch() {
  const [options, setOptions] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchParam, 700);
  const dispatch = useDispatch();

  const fetchData = async () => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${debouncedValue}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setOptions(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          setLoading(false);
          dispatch(setError("Something went wrong while fetching your data"));
        }
      });
  };

  useEffect(() => {
    if (debouncedValue) {
      setLoading(true);
      fetchData();
    }
  }, [debouncedValue]);

  return (
    <div className="live-search">
      <Autocomplete
        onChange={(event, newValue) => {
          if (newValue) {
            dispatch(setCurrentCity(newValue));
          }
        }}
        getOptionLabel={(options) => options.LocalizedName}
        options={options}
        isOptionEqualToValue={(option, value) =>
          option.LocalizedName === value.LocalizedName
        }
        noOptionsText={debouncedValue ? "no city found" : "start typing"}
        renderOption={(props, options) => (
          <Box component="li" {...props} key={options.Key}>
            {options.LocalizedName}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            placeholder="Start typing here"
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
        )}
      />
    </div>
  );
}

export default LiveSearch;
