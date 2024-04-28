import { styled } from '@mui/material/styles';
import HomeLayoutContent from './home-layout-content';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import HomeLayoutToolbar from './home-layout-toolbar';
import { useAppSelector } from 'utils/hooks/redux';
import { selectMenuState } from 'setting/slices/toolbarSlice';

const navbarWidth = 220;

type styledDesktopNavbar = {
  open: boolean;
  position: 'rigth' | 'left' | 'top' | 'bottom';
};

const StyledNavBar = styled('div')<styledDesktopNavbar>(({ theme, open, position }: any) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
  height: '100%!important',
  background: theme.palette.background.default,
  minHeight: '100vh',
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(position === 'left' && {
      marginLeft: `-${navbarWidth}px`,
    }),
    ...(position === 'right' && {
      marginRight: `-${navbarWidth}px`,
    }),
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HomePageLayoutProps {
  children: ReactNode;
}

function HomePageLayout({ children }: HomePageLayoutProps) {
  const menuState = useAppSelector(selectMenuState);

  return (
    <Box className="flex">
      <StyledNavBar
        className="flex-col flex-auto sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5"
        position="left"
        open={menuState}
      >
        <HomeLayoutContent />
      </StyledNavBar>
      <Box className="flex flex-col w-full">
        <HomeLayoutToolbar />
        {children}
      </Box>
    </Box>
  );
}

export default HomePageLayout;
