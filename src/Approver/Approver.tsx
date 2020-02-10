import React from 'react';
import dayjs from 'dayjs';
import { createUseStyles, useTheme } from 'react-jss';
import ApprovedIcon from './approved.svg';
import PendingIcon from './pending.svg';
import style from './Approver.style';

const useStyles = createUseStyles(style);

interface IApproverItem {
  approver: {
    profile_picture: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  last_updated_date: string;
  last_notified_time: string;
  status: string;
};

interface IApproverProps {
  item: IApproverItem;
  counter: number;
  containerClassName: string;
};

const Approver: React.FC<IApproverProps> = ({ item, counter, containerClassName }: IApproverProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={`${classes.approvedContainer} ${containerClassName}`}>
      <div className={classes.approvedCounter}>{counter}</div>
      <div className={classes.approvedPic}><img src={item.approver.profile_picture} alt={item.approver.first_name} /></div>
      <div className={classes.approvedUserContainer}>
        <div>
          {item.approver.first_name} {item.approver.last_name} <span className={classes.approvedUserEmail}>({item.approver.email})</span>
        </div>
        <div className={classes.approvedDate}>
          {item.status === 'created' ? 'Last notified' : 'Approved'} {dayjs(item.last_updated_date).format('MMM D, YYYY')}
        </div>
      </div>
      <div className={classes.approvedStatus}>
        <img alt="status" src={item.status === 'created' ? PendingIcon : ApprovedIcon} />
      </div>
    </div>
  );
};

export default Approver;
