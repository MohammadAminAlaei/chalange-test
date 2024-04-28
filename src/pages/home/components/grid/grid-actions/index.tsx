import { FC } from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const GridEditAction: FC = () => {
  return (
    <IconButton>
      <EditIcon color="primary" className="!text-24" />
    </IconButton>
  );
};

export const GridDeleteAction: FC = () => {
  return (
    <IconButton>
      <DeleteIcon color="error" className="!text-24" />
    </IconButton>
  );
};
