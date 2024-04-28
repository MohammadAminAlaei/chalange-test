import { Paper } from '@mui/material';
import HomeLayout from './home-layout/index';
import HomeActions from './components/actions';
import Grid from './components/grid';

export default function Home() {
  return (
    <>
      <HomeLayout>
        <Paper className="p-20" elevation={4}>
          <HomeActions />
          <div className="my-24">
            <Grid />
          </div>
        </Paper>
      </HomeLayout>
    </>
  );
}
