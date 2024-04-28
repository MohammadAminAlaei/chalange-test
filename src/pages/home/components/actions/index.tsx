import { FC } from 'react';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const HomeActions: FC = () => {
  return (
    <Grid container gap={2} justifyContent="end">
      <Grid>
        <Button startIcon={<AddIcon />} variant="text">
          ایجاد
        </Button>
      </Grid>
      <Grid>
        <Button startIcon={<FileDownloadIcon />} variant="text">
          دریافت خروجی
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeActions;
