export interface ITheme {
  fontSize: {
    sm: number;
    md: number;
    lg: number;
  };
  lineHeight: {
    sm: string;
    md: string;
    lg: string;
  };
  media: {
    desktop: string;
  };
  palette: {
    alert: string;
    warning: string;
    primary: string;
    secondary: string;
    success: string;
    light: string;
    shadow: string;
  };
  spacing: {
    gutter: number;
  };
};

export default {
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16
  },
  lineHeight: {
    sm: '14px',
    md: '16px',
    lg: '19px'
  },
  media: {
    desktop: '@media only screen and (min-width: 376px)'
  },
  palette: {
    alert: '#FF6448',
    warning: '#FFA03D',
    primary: '#222222',
    secondary: 'rgba(34, 34, 34, 0.5)',
    success: '#26c281',
    light: 'rgba(34, 34, 34, 0.05)',
    shadow: 'rgba(34, 34, 34, 0.1)'
  },
  spacing: {
    gutter: 16
  }
} as ITheme;
