import { ITheme } from '../theme';

export default (theme: ITheme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    [theme.media.desktop]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto)',
      gridTemplateRows: 'repeat(6, auto)',
      backgroundColor: '#fff',
      borderRadius: 8
    }
  },
  serviceContainer: {
    display: 'flex',
    boxShadow: `0px 1px 0px ${theme.palette.light}`,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    padding: {
      top: 20,
      left: theme.spacing.gutter,
      right: theme.spacing.gutter,
      bottom: 19
    },
    '& img': {
      height: 32,
      width: 32,
      paddingRight: 8,
      [theme.media.desktop]: {
        paddingRight: 12
      }
    },
    [theme.media.desktop]: {
      backgroundColor: 'unset',
      gridColumnStart: 1,
      gridColumnEnd: 'span 2',
      gridRowStart: 1,
      gridRowEnd: 'span 1',
      fontSize: theme.fontSize.lg,
      lineHeight: theme.lineHeight.lg,
      padding: {
        top: 21,
        left: theme.spacing.gutter,
        right: theme.spacing.gutter,
        bottom: 20
      }
    }
  },
  requestGridContainer: {
    backgroundColor: '#fff',
    paddingBottom: 25,
    [theme.media.desktop]: {
      backgroundColor: 'unset',
      borderRight: `1px solid ${theme.palette.light}`,
      gridColumnStart: 1,
      gridColumnEnd: 'span 1',
      gridRowStart: 2,
      gridRowEnd: 'span 4',
      paddingBottom: 0
    }
  },
  requestGrid: {
    margin: {
      left: theme.spacing.gutter,
      right: theme.spacing.gutter,
      bottom: 15
    },
    border: `1px solid ${theme.palette.light}`,
    boxSizing: 'border-box',
    boxShadow: `0px 2px 4px ${theme.palette.light}`,
    borderRadius: 8,
    '& > div': {
      padding: {
        top: 10,
        bottom: 10,
        left: theme.spacing.gutter,
        right: theme.spacing.gutter
      }
    },
    [theme.media.desktop]: {
      margin: {
        left: theme.spacing.gutter,
        right: theme.spacing.gutter,
        top: theme.spacing.gutter,
        bottom: 14
      }
    }
  },
  requestGridRowRequestedBy: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      width: '100%'
    }
  },
  requestGridRow: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.light}`
  },
  requestGridRowLabel: {
    flexBasis: '45%',
    color: theme.palette.secondary,
    [theme.media.desktop]: {
      flexBasis: '30%'
    }
  },
  requestGridRowValue: {
    display: 'flex',
    alignItems: 'center',
    flexBasis: '55%',
    [theme.media.desktop]: {
      flexBasis: '70%'
    }
  },
  requestFileIcon: {
    paddingRight: 8,
    color: theme.palette.success,
    fontSize: theme.fontSize.lg
  },
  requestGridRowDescription: {
    /*padding: {
      top: 10,
      bottom: 10,
      left: theme.spacing.gutter,
      right: theme.spacing.gutter
    },*/
    flexFlow: 'wrap',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.light}`,
    [theme.media.desktop]: {
      flexFlow: 'normal'
    },
  },
  requestGridRowLabelDescription: {
    color: theme.palette.secondary,
    [theme.media.desktop]: {
      flexBasis: '30%'
    }
  },
  requestGridRowValueDescription: {
    paddingTop: 4,
    [theme.media.desktop]: {
      flexBasis: '70%'
    }
  },
  requestGridRowDouble: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'wrap',
    [theme.media.desktop]: {
      flexFlow: 'row'
    }
  },
  requestGridRowSingle: {
    flexBasis: '100%',
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.light}`,
    padding: {
      top: 10,
      bottom: 10
    },
    [theme.media.desktop]: {
      flexBasis: '50%',
      borderRight: `1px solid ${theme.palette.light}`
    }
  },
  requestGridRowSingleLabel: {
    flexBasis: '45%',
    color: theme.palette.secondary,
    [theme.media.desktop]: {
      flexBasis: '60%'
    }
  },
  requestGridRowSingleValue: {
    display: 'flex',
    alignItems: 'center',
    flexBasis: '55%',
    [theme.media.desktop]: {
      flexBasis: '40%'
    },
    '& img': {
      paddingRight: 8
    }
  },
  requestGridRowFile: {
    display: 'none',
    [theme.media.desktop]: {
      padding: {
        top: 10,
        bottom: 10,
        left: theme.spacing.gutter,
        right: theme.spacing.gutter
      },
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.palette.light}`
    }
  },
  requestWarning: {
    padding: {
      left: theme.spacing.gutter,
      right: theme.spacing.gutter
    },
    fontSize: theme.fontSize.sm
  },
  requestWarningTitle: {
    color: theme.palette.alert
  },
  requestWarningSubtitle: {
    color: theme.palette.secondary
  },
  approverContainer: {
    backgroundColor: '#fff',
    marginTop: 5,
    boxShadow: `0px -1px 0px ${theme.palette.light}, 0px 1px 0px ${theme.palette.light}`,
    padding: {
      top: theme.spacing.gutter,
      left: theme.spacing.gutter,
      right: theme.spacing.gutter
    },
    [theme.media.desktop]: {
      overflowY: 'scroll',
      maxHeight: 347,
      backgroundColor: 'unset',
      boxShadow: 'none',
      margin: 0,
      gridColumnStart: 2,
      gridColumnEnd: 'span 1',
      gridRowStart: 2,
      gridRowEnd: 'span 5',
    }
  },
  approvedContainer: {
    borderBottom: `1px solid ${theme.palette.light}`
  },
  approvedContainerTitle: {
    paddingBottom: theme.spacing.gutter,
    color: theme.palette.secondary,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm
  },
  pendingContainer: {
    paddingTop: theme.spacing.gutter
  },
  pendingContainerTitle: {
    paddingBottom: theme.spacing.gutter,
    color: theme.palette.secondary,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm
  },
  requestedByAvatar: {
    width: 24,
    height: 24,
    paddingRight: 8
  },
  approvedRow: {
    paddingBottom: theme.spacing.gutter
  },
  actionsContainer: {
    [theme.media.desktop]: {
      gridColumnStart: 1,
      gridColumnEnd: 'span 1',
      gridRowStart: 6,
      gridRowEnd: 'span 1',
      borderRight: `1px solid ${theme.palette.light}`,
      display: 'inline',
      paddingTop: 13
    },
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.gutter,
    '& button': {
      flex: 1,
      border: `1px solid ${theme.palette.light}`,
      boxSizing: 'border-box',
      borderRadius: 8,
      padding: 8,
      color: '#fff',
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.md,
      cursor: 'pointer',
      '&:focus': {
        outline: 0
      }
    }
  },
  actionApprove: {
    backgroundColor: theme.palette.success,
    marginRight: 10
  },
  actionDeny: {
    background: theme.palette.alert
  }
});