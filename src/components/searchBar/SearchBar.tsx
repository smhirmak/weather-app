import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchBar: React.FC<{ setChecked?: any | undefined }> = ({ setChecked }) => {
  const [enteredCityName, setEnteredCityName] = useState<string>('');
  const router = useRouter();

  const changeHandle = (event: any) => {
    setEnteredCityName(() => event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    setEnteredCityName(event.target.value);
    router.asPath != '/' && setChecked((prev: boolean) => !prev);
    router.push(`/${enteredCityName}`);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Box className="flex justify-center items-center w-auto pt-10">
        <TextField
          variant="outlined"
          label="Please enter a city name"
          onChange={changeHandle}
          value={enteredCityName}
          color="primary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  edge="end"
                  className="rounded-b-md rounded-t-md h-18"
                  color="success"
                  onClick={onSubmitHandler}>
                  <SearchIcon sx={{ color: 'gray' }} />
                </IconButton>
              </InputAdornment>
            )
          }}></TextField>
      </Box>
    </form>
  );
};

export default SearchBar;
