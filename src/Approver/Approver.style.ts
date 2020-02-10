import { ITheme } from '../theme';

export default (theme: ITheme) => ({
  approvedContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  approvedCounter: {
    backgroundColor: theme.palette.shadow,
    borderRadius: 8,
    marginRight: 8,
    width: 16,
    height: 14,
    textAlign: 'center',
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    color: theme.palette.secondary
  },
  approvedPic: {
    padding: {
      right: 8
    },
    '& img': {
      width: 24,
      height: 24
    }
  },
  approvedUserContainer: {
    flexGrow: 1
  },
  approvedUserEmail: {
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    color: theme.palette.secondary
  },
  approvedDate: {
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    color: theme.palette.secondary
  },
  approvedStatus: {
    paddingLeft: 8
  },
  thumb: {
    width: 24,
    height: 24
  }
});