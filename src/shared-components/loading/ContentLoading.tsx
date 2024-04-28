import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import Box from '@mui/material/Box';

import './style.css';
import { Paper } from '@mui/material';

interface ContentLoadingProps {
  delay?: number;
  dynamicHeight?: boolean;
}

function ContentLoading({ dynamicHeight }: ContentLoadingProps) {
  return (
    <div
      className={clsx(
        dynamicHeight
          ? 'flex flex-col justify-center items-center h-full min-h-216'
          : 'flex flex-1 flex-col items-center pt-[20vh] h-full'
      )}
    >
      <Paper className="px-160 py-96">
        <Typography variant="h6" color="text.secondary">
          درحال بارگذاری
        </Typography>
        <Box
          id="spinner"
          className="mx-auto"
          sx={{
            '& > div': {
              backgroundColor: 'palette.secondary.main',
            },
          }}
        >
          <div className="bounce1 !bg-secondary dark:!bg-grey-500" />
          <div className="bounce2 !bg-secondary dark:!bg-grey-500" />
          <div className="bounce3 !bg-secondary dark:!bg-grey-500" />
        </Box>
      </Paper>
    </div>
  );
}

export default ContentLoading;
