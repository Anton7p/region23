import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppState } from './store';
import { TExhaustersState } from './types';

import { uri } from '../api/uri';

export const initialState: TExhaustersState = {
  data: [],
};

export const loadExhaustersData = createAsyncThunk('exhausters/loadExhausters', () => {
  return axios({
    method: 'get',
    url: `${uri.exhausters}`,
    responseType: 'stream',
  }).then((response) => {
    return response.data;
  });
});
export const startEmulation = createAsyncThunk('exhausters/startEmulation', () => {
  return axios({
    method: 'post',
    url: `${uri.start}`,
    responseType: 'stream',
  });
});

export const exhaustersSlice = createSlice({
  name: 'exhausters',
  initialState,
  reducers: {
    setExhausters: (state: TExhaustersState, action: PayloadAction<{ data: any[] }>) => {
      state.data = action.payload.data;
    },
  },
});

export const { setExhausters } = exhaustersSlice.actions;

export const selectItems = (state: AppState) => state.exhausters;

export const exhaustersSliceActions = exhaustersSlice.actions;

export default exhaustersSlice.reducer;
