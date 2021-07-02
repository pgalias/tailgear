import React, { FC } from 'react';
import { LiveEditor, LiveError, LivePreview } from 'react-live';
import parse from 'html-react-parser';
import { useComponentCode } from '../../hooks/useComponentCode';
import { Clipboard } from '../../../helpers/clipboard';
import { LiveCoding, LiveEditorStyles } from '../../components/liveCoding';
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
      <LiveCoding code={code}>
        <div className={styles.variantCode}>
          <div className={styles.variantCodeRow}>
            <LivePreview />
          </div>
          <div className={styles.variantCodeRow}>
            <LiveEditor style={LiveEditorStyles} />
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
      </LiveCoding>
      {disclaimer && <p className={styles.disclaimer}>{parse(disclaimer)}</p>}
    </div>
  );
};
