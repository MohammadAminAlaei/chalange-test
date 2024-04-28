import { lazy } from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks/redux';
import { selectMode } from 'setting/slices/userPreferencesSlice';

const LightErrorVector = lazy(() => import('assets/images/404-page.svg?react'));
const DarkErrorVector = lazy(() => import('assets/images/dark-404-page.svg?react'));

export default function Page404() {
  const mode = useAppSelector(selectMode);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container disableGutters maxWidth="md" className="relative top-[50%] translate-y-[-50%]">
      <Paper className="p-40">
        <Grid container className="flex !flex-col justify-center items-center h-full">
          <Grid item className="!mr-32">
            {mode === 'light' ? <LightErrorVector /> : <DarkErrorVector />}
          </Grid>
          <Grid item className="!mt-68">
            <Typography variant="h2" color="primary.main">
              404
            </Typography>
          </Grid>
          <Grid item className="!mt-10">
            <Typography variant="h4" className="dark:text-dark-mode-text">
              صفحه مورد نظر یافت نشد.
            </Typography>
          </Grid>
          <Grid item className="!mt-40">
            <Button onClick={goHome}>صفحه اصلی</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
