import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { useComponentCode } from '../hooks/useComponentCode';
import { Clipboard } from '../../helpers/clipboard';

import styles from './code.module.css';

type Props = {
  component: FunctionComponent;
};

export const Code: FunctionComponent<Props> = ({ component }) => {
  const code = useComponentCode(component);

  return (
    <div className={styles.codeWrapper}>
      <button
        className={styles.copyCode}
        type="button"
        onClick={() => Clipboard.write(code)}
      >
        Copy
      </button>
      <SyntaxHighlighter
        language="htmlbars"
        style={docco}
        customStyle={{ textAlign: 'left' }}
        showLineNumbers
      >
        {`${code}`}
      </SyntaxHighlighter>
    </div>
  );
};
