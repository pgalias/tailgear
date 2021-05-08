import { FunctionComponent, ReactElement, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { htmlBeautifier } from '../../helpers/string';
import { Storage } from '../../helpers/storage';
import { StorageKeys } from '../../constants';

export const useComponentCode = (component: FunctionComponent): string => {
  const codeString = ReactDOMServer.renderToStaticMarkup(
    component({}) as ReactElement
  );
  const code = htmlBeautifier(codeString);

  useEffect(() => {
    Storage.set(StorageKeys.ComponentCode, code);
  }, [component]);

  return code;
};
