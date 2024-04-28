import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'setting/store';

export interface IToolbar {
  open: boolean;
}

const initialState: IToolbar = {
  open: true,
};

const toolbarSlice = createSlice({
  initialState,
  name: 'toolbar-slice',
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
      return state;
    },
  },
});

export const { toggleMenu } = toolbarSlice.actions;

export const selectMenuState = ({ toolbar }: RootState) => toolbar.open;

export default toolbarSlice.reducer;
