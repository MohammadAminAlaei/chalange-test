import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'setting/store';
import { getPrefersTheme } from 'utils/themeMode';
import { PaletteMode } from '@mui/material';
import Cookie from 'utils/cookie';

export interface IUserPreferences {
  themeMode: PaletteMode;
}

function getInitialValue(): IUserPreferences {
  const _storedUserPreferences = Cookie.getCookie<IUserPreferences | null>('user-preferences');

  if (_storedUserPreferences) {
    return _storedUserPreferences;
  }

  const userSystemThemeMode = getPrefersTheme() as PaletteMode;

  return {
    themeMode: userSystemThemeMode,
  };
}

const initialState: IUserPreferences = getInitialValue();

const modeSlice = createSlice({
  initialState,
  name: 'user-preferences',
  reducers: {
    setMode: (state, action: PayloadAction<PaletteMode>) => {
      const newSetting = {
        ...state,
        themeMode: action.payload,
      };

      Cookie.setCookie('user-preferences', newSetting, 400);

      return newSetting;
    },
    setBackgroundImage: (state, action: PayloadAction<string>) => {
      const newSetting = {
        ...state,
        backgroundImage: action.payload,
      };

      Cookie.setCookie('user-preferences', newSetting, 400);

      return newSetting;
    },
  },
});

export const { setMode, setBackgroundImage } = modeSlice.actions;

export const selectMode = ({ userPreferences }: RootState) => userPreferences.themeMode;

export default modeSlice.reducer;
