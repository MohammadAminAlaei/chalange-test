import { FC, memo } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// styles
const ProgressLoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});

// ==============================|| LOADER ||============================== //

const ProgressLoader: FC<LinearProgressProps> = ({ ...props }) => (
  <ProgressLoaderWrapper>
    <LinearProgress {...props} />
  </ProgressLoaderWrapper>
);

export default memo(ProgressLoader);