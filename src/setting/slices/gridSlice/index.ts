import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'setting/store';
import axios from 'axios';

interface gridRowsInterface {
  loading: boolean;
  error: Error | null;
  data: any;
}

export const getGridRows = createAsyncThunk(
  'grid/rows',
  async (
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    { rejectWithValue, signal }
  ) => {
    try {
      const { data } = await axios.get(
        `https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos?page=${page}&limit=${limit}`,
        {
          signal,
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: gridRowsInterface = {
  loading: false,
  error: null,
  data: [],
};

const gridRowsSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGridRows.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(getGridRows.rejected, (state) => {
      state.loading = false;
      state.error = new Error();
      state.data = [];
    });
    builder.addCase(getGridRows.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export const selectgridRows = ({ grid }: RootState) => grid;

export default gridRowsSlice.reducer;
