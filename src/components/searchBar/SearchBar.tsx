import { Typography, Box, TextField, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [enteredCityName, setEnteredCityName] = useState<string>();

  const router = useRouter();

  const changeHandle = (event: any) => {
    setEnteredCityName(() => event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    setEnteredCityName(event.target.value);
    router.push(`/${enteredCityName}`);
  };
  return (
    <form>
      <Box className="flex justify-center pt-10">
        <TextField
          variant="outlined"
          label="Please enter a city name"
          onChange={changeHandle}
          value={enteredCityName}
          InputProps={{
            startAdornment: <SearchIcon />,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  edge="end"
                  sx={{
                    height: 56,
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10
                  }}
                  color="success"
                  onClick={onSubmitHandler}>
                  <Typography className="text-gray-400 hover:text-gray-100">SEARCH</Typography>
                </IconButton>
              </InputAdornment>
            )
          }}></TextField>
      </Box>
    </form>
  );
};

export default SearchBar;
