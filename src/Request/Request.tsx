import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileExcel, faFileImage, faFileArchive, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Approver from '../Approver/Approver';
import RequestRow from './RequestRow/RequestRow';
import style from './Request.style';

const useStyles = createUseStyles(style);

const fileExtMap: { [key: string]: IconProp } = {
  xls: faFileExcel,
  jpg: faFileImage,
  jpeg: faFileImage,
  png: faFileImage,
  svg: faFileImage,
  zip: faFileArchive,
  pdf: faFilePdf
};

interface IRequestApprover {
  approver: {
    profile_picture: string;
    first_name: string;
    last_name: string;
    email: string;
  }
  last_updated_date: string;
  last_notified_time: string;
  status: string;
};

interface IRequest {
  id: number;
  cost: number;
  renewal_frequency_in_months: number;
  expense_account: string;
  files: string[];
  description: string;
  approvers: IRequestApprover[];
  service: {
    logo: string;
    name: string;
    usage_count: number;
  }
  requested_by: {
    profile_picture: string;
    first_name: string;
    last_name: string;
  }
}

interface IRequestProps {
  request: IRequest;
};

interface IFile {
  icon: IconProp;
  name: string;
  url: string;
}

const Request: React.FC<IRequestProps> = ({ request }: IRequestProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 375);
  const [approved, setApproved] = useState([] as IRequestApprover[]);
  const [pending, setPending] = useState([] as IRequestApprover[]);
  const [file, setFile] = useState({} as IFile);

  useEffect(() => {
    if (request) {
      setApproved(request.approvers.filter((item: IRequestApprover) => item.status === 'accepted'));
      setPending(request.approvers.filter((item: IRequestApprover) => item.status === 'created'));

      if (request.files && request.files[0]) {
        const nameSplit = request.files[0].split('/');
        const name = nameSplit[nameSplit.length - 1];
        const extSplit = name.split('.');
        const ext = extSplit[extSplit.length - 1];
        let icon: IconProp = fileExtMap[ext];
        if (!icon) icon = faFile;
        setFile({
          icon,
          name,
          url: request.files[0]
        });
      }
    }
  }, [request]);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 375);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.serviceContainer}>
        <img src={request.service.logo} alt={request.service.name} /> Request for {request.service.name} (#{request.id})
      </div>

      <div className={classes.requestGridContainer}>
        <div className={classes.requestGrid}>
          <RequestRow>
            <div>Requested by</div>
            <div className={classes.requestGridRowRequestedBy}>
              <img className={classes.requestedByAvatar} src={request.requested_by.profile_picture} alt={request.requested_by.first_name} />
              <span>{request.requested_by.first_name} {request.requested_by.last_name}</span>
            </div>
          </RequestRow>

          <RequestRow>
            <div>Cost</div>
            <div>${request.cost}</div>
          </RequestRow>
          {/*<div className={classes.requestGridRow}>
            <div className={classes.requestGridRowLabel}>Requested by</div>
            <div className={classes.requestGridRowValue}>
              <img className={classes.requestedByAvatar} src={request.requested_by.profile_picture} alt={request.requested_by.first_name} /> {request.requested_by.first_name} {request.requested_by.last_name}
            </div>
  </div>

          <div className={classes.requestGridRow}>
            <div className={classes.requestGridRowLabel}>Cost</div>
            <div className={classes.requestGridRowValue}>${request.cost}</div>
          </div>*/}

          <div className={classes.requestGridRowDouble}>
            <div className={classes.requestGridRowSingle}>
              <div className={classes.requestGridRowSingleLabel}>Renewal Frequency</div>
              <div className={classes.requestGridRowSingleValue}>{request.renewal_frequency_in_months} {request.renewal_frequency_in_months === 1 ? 'month' : 'months'}</div>
            </div>

            <div className={classes.requestGridRowSingle}>
              <div className={classes.requestGridRowSingleLabel}>Annual Cost</div>
              <div className={classes.requestGridRowSingleValue}>${(12 / request.renewal_frequency_in_months) * request.cost}</div>
            </div>
          </div>

          <RequestRow>
            <div>Expense Account</div>
            <div>{request.expense_account}</div>
          </RequestRow>

          {/*<div className={classes.requestGridRow}>
            <div className={classes.requestGridRowLabel}>Expense Account</div>
            <div className={classes.requestGridRowValue}>{request.expense_account}</div>
        </div>*/}

          {isDesktop && <RequestRow>
            <div>File</div>
            {file && file.icon && <div>
              <FontAwesomeIcon className={classes.requestFileIcon} icon={file.icon} /> {file.name}
            </div>}
          </RequestRow>}

          {/*<div className={classes.requestGridRowFile}>
            <div className={classes.requestGridRowLabel}>File</div>
            {file && file.icon && <div className={classes.requestGridRowValue}>
              <FontAwesomeIcon className={classes.requestFileIcon} icon={file.icon} /> {file.name}
            </div>}
          </div>*/}

          <div className={classes.requestGridRowDescription}>
            <div className={classes.requestGridRowLabelDescription}>Description</div>
            <div className={classes.requestGridRowValueDescription}>{request.description}</div>
          </div>
        </div>

        <div className={classes.requestWarning}>
          <div className={classes.requestWarningTitle}>Your company is already paying for {request.service.name} on a recurring basis.</div>
          <div className={classes.requestWarningSubtitle}>({request.service.usage_count} {request.service.usage_count === 1 ? 'instance' : 'instances'} owned by John Smith)</div>
        </div>
      </div>

      <div className={classes.approverContainer}>
        <div className={classes.approvedContainer}>
          <div className={classes.approvedContainerTitle}>Approved</div>
          {!approved && <div>No approvers yet</div>}
          {approved && approved.map((item, index) => <Approver containerClassName={classes.approvedRow} item={item} counter={index + 1} key={index} />)}
        </div>

        <div className={classes.pendingContainer}>
          <div className={classes.pendingContainerTitle}>Pending</div>
          {!pending && <div>No pending approvals</div>}
          {pending && pending.map((item, index) => <Approver containerClassName={classes.approvedRow} item={item} counter={index + approved.length + 1} key={index} />)}
        </div>
      </div>

      <div className={classes.actionsContainer}>
        <button type="button" className={classes.actionApprove}>Approve</button>
        <button className={classes.actionDeny}>Deny</button>
      </div>
    </div>
  );
};

export default Request;
