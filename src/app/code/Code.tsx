import React, { FunctionComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import { prettyPrint } from 'html';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

type Props = {
  component: FunctionComponent;
};

export const Code: FunctionComponent<Props> = ({ component }) => {
  const codeString = ReactDOMServer.renderToStaticMarkup(
    component({}) as React.ReactElement
  );
  const code = prettyPrint(codeString, { indent_size: 2 });

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
