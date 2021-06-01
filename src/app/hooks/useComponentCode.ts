import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { htmlBeautifier } from '../../helpers/string';

export const useComponentCode = (component: FunctionComponent): string => {
  const [codeString, setCodeString] = useState<string>('');

  useEffect(() => {
    const code = ReactDOMServer.renderToStaticMarkup(
      component({}) as ReactElement
    );

    setCodeString(htmlBeautifier(code));
  }, [component]);

  return codeString;
};
