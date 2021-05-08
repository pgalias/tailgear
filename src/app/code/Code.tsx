import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { useComponentCode } from '../hooks/useComponentCode';

type Props = {
  component: FunctionComponent;
};

export const Code: FunctionComponent<Props> = ({ component }) => {
  const code = useComponentCode(component);

  return (
    <SyntaxHighlighter
      language="htmlbars"
      style={docco}
      customStyle={{ textAlign: 'left' }}
      showLineNumbers
    >
      {`${code}`}
    </SyntaxHighlighter>
  );
};
