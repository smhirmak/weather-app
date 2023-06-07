import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import data from '../../../states.json';

const filteredStates = data.filter((state) => state.country_code == 'TR');
const states = filteredStates.map((state) => state.name.replace(' Province', ''));

const SearchAutoComplete: React.FC = () => {
  const [completeValue, setCompleteValue] = useState<string | null>(null);
  const router = useRouter();

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    completeValue !== null && router.push(`/${completeValue}`);
    setCompleteValue(null);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container className={isMobile ? 'w-64' : 'w-80'}>
        <Grid item className={`flex justify-center items-center ${!isMobile && 'pl-12'}`} xs={11}>
          <Autocomplete
            fullWidth
            className="w-80"
            value={completeValue}
            forcePopupIcon={false}
            onChange={(event: any, newValue: string | null) => {
              setCompleteValue(newValue);
            }}
            onClick={onSubmitHandler}
            options={states}
            renderInput={(params) => <TextField {...params} label="Please enter a city name" />}
          />
        </Grid>
        <Grid item className="flex justify-center items-center" xs={1}>
          {completeValue !== null ? (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                edge="end"
                className="rounded-b-md rounded-t-md "
                color="success"
                onClick={onSubmitHandler}>
                <SearchIcon fontSize="large" sx={{ color: 'gray' }} />
              </IconButton>
            </InputAdornment>
          ) : (
            <Box className="flex justify-center items-center"></Box>
          )}
        </Grid>
      </Grid>
      {/* <Stack className="flex flex-row justify-center items-center w-auto pt-10">
        <Autocomplete
          className="w-64"
          value={completeValue}
          forcePopupIcon={false}
          onChange={(event: any, newValue: string | null) => {
            setCompleteValue(newValue);
          }}
          onClick={onSubmitHandler}
          options={states}
          renderInput={(params) => <TextField {...params} label="Please enter a city name" />}
        />
        {completeValue !== null && (
          // <InputAdornment className="flex justify-center items-center pt-10" position="end">
          <InputAdornment position="end">
            <IconButton
              type="submit"
              edge="end"
              className="rounded-b-md rounded-t-md "
              color="success"
              onClick={onSubmitHandler}>
              <SearchIcon sx={{ color: 'gray' }} />
            </IconButton>
          </InputAdornment>
        )}
      </Stack> */}
    </form>
  );
};

export default SearchAutoComplete;
