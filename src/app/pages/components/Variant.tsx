import React, { FC, useRef } from 'react';
import { LiveEditor, LiveError, LivePreview } from 'react-live';
import parse from 'html-react-parser';
import { useComponentCode } from '../../hooks/useComponentCode';
import { Clipboard } from '../../../helpers/clipboard';
import { LiveCoding, LiveEditorStyles } from '../../components/liveCoding';
import styles from './styles.module.css';

type Props = {
  name?: string;
  component: FC;
  disclaimer?: string;
};

export const Variant: FC<Props> = ({ name, component, disclaimer }) => {
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const code = useComponentCode(component);

  const copyCode = () => {
    // potentially risky solution for receiving current code
    // it might be broken when eg. library will change the HTML structure
    const currentCode =
      copyButtonRef.current?.parentElement?.querySelector('textarea')
        ?.textContent ?? code;

    Clipboard.write(currentCode);
  };

  return (
    <div className={styles.variant}>
      {name && <h5 className={styles.variantName}>{name}</h5>}
      <LiveCoding code={code}>
        <div className={styles.variantCode}>
          <div className={styles.variantCodeRow}>
            <LivePreview />
          </div>
          <div className={styles.variantCodeRow}>
            <LiveEditor style={LiveEditorStyles} />
            <LiveError />
            <button
              ref={copyButtonRef}
              className={styles.copyCode}
              type="button"
              onClick={copyCode}
            >
              Copy
            </button>
          </div>
        </div>
      </LiveCoding>
      {disclaimer && (
        <blockquote role="blockquote" className={styles.disclaimer}>
          {parse(disclaimer)}
        </blockquote>
      )}
    </div>
  );
};
