import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LiveEditor } from 'react-live';
import styles from './styles.module.css';
import { LiveCoding, LiveEditorStyles } from '../../components/liveCoding';

type Props = {
  PageContent: FC;
};

const components = {
  code: ({ children }: { children: string }) => (
    <LiveCoding code={children} disabled>
      <LiveEditor style={LiveEditorStyles.day} />
    </LiveCoding>
  ),
};

export const StaticPage: FC<Props> = ({ PageContent }) => {
  if (!PageContent) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <MDXProvider components={components}>
        <PageContent />
      </MDXProvider>
    </div>
  );
};
