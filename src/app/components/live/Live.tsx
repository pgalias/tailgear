import React, { FC } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useComponentCode } from '../../hooks/useComponentCode';
import { Clipboard } from '../../../helpers/clipboard';
import styles from './live.module.css';

type Props = {
  component: FC;
};

export const Live: FC<Props> = ({ component }) => {
  const code = useComponentCode(component);

  const copyCode = () => Clipboard.write(code);

  return (
    <LiveProvider
      code={code}
      transformCode={(c) =>
        c.replace(/class(?<class>="(\w|\d|[ -])+")/g, 'className$<class>')
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <LivePreview />
        </div>
        <div className={styles.row}>
          <button className={styles.copyCode} type="button" onClick={copyCode}>
            Copy
          </button>
          <LiveEditor />
          <LiveError />
        </div>
      </div>
    </LiveProvider>
  );
};
