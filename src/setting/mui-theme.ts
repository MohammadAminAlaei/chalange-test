import { ThemeOptions, Zoom, alpha } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { merge, cloneDeep } from 'lodash';

const lightMode: ThemeOptions = {
  direction: 'rtl',
  palette: {
    mode: 'light',
    text: {
      primary: '#232D42',
      secondary: '#232D42',
      disabled: '#AABFCB',
    },
    common: {
      black: '#0F232E',
      white: '#fff',
    },
    primary: {
      light: '#6698FF',
      main: '#3E7BFA',
      dark: '#3568D4',
      contrastText: '#fff',
    },
    secondary: {
      '50': '#363D4D',
      light: '#363D4D',
      main: '#232D42',
      dark: '#111A2E',
      contrastText: '#fff',
    },
    success: {
      light: '#39D98A',
      main: '#06C270',
      dark: '#05A660',
    },
    warning: {
      light: '#FDDD48',
      main: '#FFCC00',
      dark: '#F1AE00',
    },
    error: {
      light: '#FF5C5C',
      main: '#FF3B3B',
      dark: '#E63535',
    },
    info: {
      light: '#5B8DEF',
      main: '#0063F7',
      dark: '#004FC4',
    },
    background: {
      paper: 'rgba(255, 255, 255, 0.8)',
    },
  },
  shadows: [
    'none',
    '0px 2px 4px -2px rgba(16, 24, 40, 0.05)',
    '0px 2px 4px -2px rgba(16, 24, 40, 0.05), 0px 4px 8px -2px rgba(16, 24, 40, 0.05)',
    '0px 2px 4px -2px rgba(16, 24, 40, 0.05), 0px 4px 8px -2px rgba(16, 24, 40, 0.05)',
    '0px 10px 30px 0px rgba(16, 24, 40, 0.05)',
    '0px 8px 32px 0px rgba(16, 24, 40, 0.08)',
    '0px 6px 32px 0px rgba(16, 24, 40, 0.12)',

    ...new Array(20).fill('0px 32px 54px -12px rgba(16, 24, 40, 0.14)'),
  ] as any,
  typography: {
    fontFamily: [
      'Yekan-Bakh-Regular',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"!important',
    ].join(','),
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontSize: 16,
    htmlFontSize: 16,
    h1: {
      fontSize: '40px',
      lineHeight: '65px',
      fontWeight: 700,
      fontFamily: 'Yekan-Bakh-Bold',
    },
    h2: {
      fontSize: '32px',
      lineHeight: '52px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '28px',
      lineHeight: '45px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '24px',
      lineHeight: '39px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    h6: {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: 700,
    },
    button: {
      fontSize: '14px',
    },
    body1: {
      fontSize: '15px',
      lineHeight: '23px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '26px',
      fontWeight: 400,
    },
    subtitle1: {
      // SMALL
      fontSize: '12px',
      lineHeight: '19px',
      fontWeight: 500,
      fontFamily: 'Yekan-Bakh-Medium',
    },
    subtitle2: {
      // Tiny
      fontSize: '10px',
      lineHeight: '16px',
      fontWeight: 400,
    },
    caption: {
      // LEAD
      fontSize: '14px',
      lineHeight: '23px',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: () => ({
          borderRadius: 0,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.65),
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            '& .Mui-selected': {
              '& span': {},
              backgroundColor: `${theme.palette.primary.main}!important`,
              color: '#fff!important',
            },
          };
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            border: `1px solid ${theme.palette.grey[300]} !important`,
            borderRadius: '4px !important',
          };
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            paddingTop: '16px',
            paddingBottom: '16px',
            textAlign: 'center',
            '& .Mui-TableHeadCell-Content': {
              justifyContent: 'center',
              minWidth: 'max-content',
            },
            '& .MuiCollapse-root': {
              margin: '12px 0 8px 0',
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              '& .MuiInputAdornment-root span': {
                cursor: 'pointer',
              },
              '& .MuiInputBase-root': {
                height: 'auto',
              },
            },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& tr td': {
            textAlign: 'center !important',
          },
          '& .MuiTableRow-root': {
            background: 'transparent',
            '&:first-of-type': {
              '& > td': {},
            },
            '&:last-of-type': {
              '& > td': {
                borderBottom: 'none',
              },
            },
          },
          '& .MuiTableCell-body': {
            paddingTop: '18px',
            paddingBottom: '15px',
            textAlign: 'center',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: () => {
          return {
            height: '50px',
          };
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: (theme) => {
          return {
            heigth: '50px',
            '& .MuiToolbar-gutters': {
              heigth: '50px',
            },
            '& .MuiTablePagination-select': {
              fontSize: theme.theme.typography.body2.fontSize,
              display: 'flex',
              alignItems: 'center',
              paddingTop: '10px',
            },
          };
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: '2px',
          gap: '4px',
          minWidth: 'auto',
          height: '32px',
          paddingLeft: '24px',
          paddingRight: '24px',
          minHeight: 'unset',
          maxHeight: 'unset !important',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[3],
          // '&:autofill':{
          //   background
          // }
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: () => {
          return {
            background: '#F2F2F2',
          };
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          width: '80px',
          height: '24px',
          userSelect: 'none',
          '& .MuiChip-label': {
            fontSize: '12px !important',
            fontWeight: '500 !important',
            fontFamily: 'Yekan-Bakh-Medium !important',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          fontSize: 11,
        }),
      },
      defaultProps: {
        TransitionComponent: Zoom,
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: 24,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            position: 'relative',
            zIndex: 0,
            '&::after': {
              content: '" "',
              position: 'absolute',
              background: 'white',
              width: '12px',
              height: '10px',
              zIndex: -1,
            },
          },
          '&.MuiCheckbox-indeterminate': {
            position: 'relative',
            zIndex: 0,
            '&::after': {
              content: '" "',
              position: 'absolute',
              background: 'white',
              width: '12px',
              height: '10px',
              zIndex: -1,
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: 22,
          },
        },
      },
    },
  },
};

const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    text: {
      primary: '#C7C9D9',
      secondary: '#C7C9D9',
      disabled: '#AABFCB',
    },
    background: {
      paper: 'rgba(40, 44, 78, 0.8)',
    },
    common: {
      white: '#2C2D3F',
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          border: `3px solid #D0D5DD3D !important`,
          borderRadius: '4px !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#C7C9D9',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          fontSize: 11,
          backgroundColor: '#555770',
          color: theme.palette.text.primary,
        }),
      },
    },
  },
};

const themesConfig = (mode: PaletteMode): ThemeOptions => {
  if (mode === 'dark') return merge(cloneDeep(lightMode), darkMode);

  return lightMode;
};

export default themesConfig;
