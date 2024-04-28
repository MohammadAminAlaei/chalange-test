import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useAppDispatch } from 'utils/hooks/redux';
import { useCallback } from 'react';
import { toggleMenu } from 'setting/slices/toolbarSlice';

export default function NestedList() {
  const dispatch = useAppDispatch();

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" className="pt-8 flex justify-end">
          <IconButton onClick={handleToggleMenu}>
            <MenuIcon className="!text-28" />
          </IconButton>
        </ListSubheader>
      }
    >
      {Array(7)
        .fill('')
        .map((_, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText className="dark:text-white" primary={`آیتم شماره ${index}`} />
          </ListItemButton>
        ))}
    </List>
  );
}
