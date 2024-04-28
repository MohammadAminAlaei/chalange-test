import { HTMLProps, lazy, memo } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import clsx from 'clsx';
import { useAppSelector } from 'utils/hooks/redux';
import { selectMode } from 'setting/slices/userPreferencesSlice';

const LightErrorVector = lazy(() => import('assets/images/empty-form-vector.svg?react'));
const DarkErrorVector = lazy(() => import('assets/images/dark-error-vector.svg?react'));

export interface EmptyListProps {
  className?: HTMLProps<HTMLElement>['className'];
  title?: string;
}

function EmptyList({ className, title = 'محتوایی یافت نشد' }: EmptyListProps) {
  const mode = useAppSelector(selectMode);
  return (
    <Paper className={clsx('p-48', className)}>
      <Grid container className="flex !flex-col justify-center items-center">
        <Grid item>{mode === 'light' ? <LightErrorVector /> : <DarkErrorVector />}</Grid>
        <Grid item className="!mt-32">
          <Typography variant="h6" className="dark:text-dark-mode-text">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default memo(EmptyList);
