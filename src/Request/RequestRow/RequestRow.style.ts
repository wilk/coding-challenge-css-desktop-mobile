import { ITheme } from '../../theme';

export default (theme: ITheme) => ({
  requestRow: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.light}`,
    '& :nth-child(0)': {
      display: 'flex',
      alignItems: 'center',
      flexBasis: '55%',
      [theme.media.desktop]: {
        flexBasis: '70%'
      }
    },
    '& :nth-child(1)': {
      flexBasis: '45%',
      color: theme.palette.secondary,
      [theme.media.desktop]: {
        flexBasis: '30%'
      }
    }
  }
});
