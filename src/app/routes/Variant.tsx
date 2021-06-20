import React, { FC } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import parse from 'html-react-parser';
import { useComponentCode } from '../hooks/useComponentCode';
import { Clipboard } from '../../helpers/clipboard';
import styles from './styles.module.css';

type Props = {
  name: string;
  component: FC;
  disclaimer?: string;
  isNameVisible: boolean;
};

export const Variant: FC<Props> = ({
  name,
  component,
  disclaimer,
  isNameVisible,
}) => {
  const code = useComponentCode(component);

  const copyCode = () => Clipboard.write(code);

  return (
    <div className={styles.variant}>
      {isNameVisible && <h5 className={styles.variantName}>{name}</h5>}
      <LiveProvider
        code={code}
        transformCode={(c) =>
          c.replace(/class(?<class>="(\w|\d|[ -:])+")/g, 'className$<class>')
        }
      >
        <div className={styles.variantCode}>
          <div className={styles.variantCodeRow}>
            <LivePreview />
          </div>
          <div className={styles.variantCodeRow}>
            <LiveEditor />
            <LiveError />
            <button
              className={styles.copyCode}
              type="button"
              onClick={copyCode}
            >
              Copy
            </button>
          </div>
        </div>
      </LiveProvider>
      {disclaimer && <p className={styles.disclaimer}>{parse(disclaimer)}</p>}
    </div>
  );
};
