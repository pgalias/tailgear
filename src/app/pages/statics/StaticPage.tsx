import React, { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  PageContent: FC;
};

export const StaticPage: FC<Props> = ({ PageContent }) => {
  if (!PageContent) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <PageContent />
    </div>
  );
};
