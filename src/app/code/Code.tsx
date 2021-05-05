import React, { FunctionComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { format } from './htmlFormatter';

type Props = {
  component: FunctionComponent;
};

export const Code: FunctionComponent<Props> = ({ component }) => {
  const codeString = ReactDOMServer.renderToStaticMarkup(
    component({}) as React.ReactElement
  );
  const code = format(codeString);

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
