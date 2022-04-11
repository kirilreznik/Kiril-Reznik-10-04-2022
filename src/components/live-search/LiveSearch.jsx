import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/slices/weatherSlice";
import "./LiveSearch.css";
function LiveSearch() {
  const [options, setOptions] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchParam, 700);
  const dispatch = useDispatch();

  const fetchData = async () => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=aR2iuaS0PfCfXKi0JGe0AizWFi9GpjA4&q=${debouncedValue}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setOptions(data))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          setLoading(false);
          setError(err);
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
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
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
