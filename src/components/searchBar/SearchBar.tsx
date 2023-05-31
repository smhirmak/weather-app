import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'next/router';
import React, { SetStateAction, useState } from 'react';

const SearchBar: React.FC<{ setChecked: React.Dispatch<SetStateAction<boolean>> }> = ({
  setChecked
}) => {
  const [enteredCityName, setEnteredCityName] = useState<string>('');
  const router = useRouter();

  const changeHandle = (event: any) => {
    setEnteredCityName(() => event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    setEnteredCityName(event.target.value);
    router.asPath != '/' && setChecked((prev) => !prev);
    router.push(`/${enteredCityName}`);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Box className="flex justify-center items-center pt-10">
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
