import { ITheme } from '../theme';

export default (theme: ITheme) => ({
  '@global': {
    body: {
      margin: 0,
      backgroundColor: '#F9FAFB',
      fontFamily: '-apple-system,BlinkMacSystemFont,Inter UI,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.md,
      color: theme.palette.primary
    }
  },
  root: {
    [theme.media.desktop]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  main: {
    maxWidth: 852
  },
  logo: {
    padding: {
      top: 32,
      bottom: 24,
      left: theme.spacing.gutter,
      right: theme.spacing.gutter
    },
    [theme.media.desktop]: {
      padding: {
        top: 32,
        bottom: 24
      }
    }
  },
  securityMessageContainer: {
    padding: {
      bottom: 24
    },
    margin: {
      left: theme.spacing.gutter,
      right: theme.spacing.gutter
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    fontSize: theme.fontSize.sm,
    color: theme.palette.secondary,
    lineHeight: theme.lineHeight.md,
    borderTop: `1px solid ${theme.palette.light}`,
    paddingTop: theme.spacing.gutter,
    [theme.media.desktop]: {
      lineHeight: theme.lineHeight.sm,
      borderTop: 'none',
      paddingTop: 0,
      margin: 0
    }
  },
  securityMessageTitle: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.warning,
    [theme.media.desktop]: {
      paddingRight: 8
    },
    '& img': {
      paddingRight: 6,
      [theme.media.desktop]: {
        paddingRight: 8
      }
    },
  },
  securityMessageDescription: {
    paddingTop: 7,
    [theme.media.desktop]: {
      paddingTop: 0
    }
  },
  requestContainer: {
    backgroundColor: '#fff'
  }
});