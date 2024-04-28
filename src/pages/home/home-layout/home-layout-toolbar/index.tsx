import { FC, memo, useCallback } from 'react';
import { IconButton, Paper, Theme, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from 'utils/hooks/redux';
import { selectMenuState, toggleMenu } from 'setting/slices/toolbarSlice';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import RefreshIcon from '@mui/icons-material/Refresh';
import { selectMode, setMode } from 'setting/slices/userPreferencesSlice';

const HomeLayoutToolbar: FC = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector(selectMenuState);
  const mode = useAppSelector(selectMode);

  const handleChangeThemeMode = () => {
    dispatch(setMode(mode === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  return (
    <Paper
      sx={(theme: Theme) => ({
        background: theme.palette.primary.main,
      })}
      className="flex justify-between items-center w-full p-8 h-56"
    >
      <div className="flex items-center gap-8">
        {!menuState ? (
          <IconButton onClick={handleToggleMenu}>
            <MenuIcon className="!text-28 !text-white" />
          </IconButton>
        ) : (
          <div />
        )}
        <Typography className="text-white" variant="h6">
          لیست ثابت ها
        </Typography>
      </div>
      <div className="flex gap-4 items-center">
        <IconButton>
          <TranslateIcon className="!text-28 !text-white" />
        </IconButton>
        <Typography className="text-white"> فارسی </Typography>
        <IconButton onClick={handleChangeThemeMode}>
          {mode === 'dark' ? (
            <LightModeIcon className="!text-28 !text-white" />
          ) : (
            <DarkModeIcon className="!text-28 !text-white" />
          )}
        </IconButton>
        <IconButton>
          <RefreshIcon className="!text-28 !text-white" />
        </IconButton>
      </div>
    </Paper>
  );
};

export default memo(HomeLayoutToolbar);
