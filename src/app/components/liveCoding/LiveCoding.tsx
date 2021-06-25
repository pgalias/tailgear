import React, { FC } from 'react';
import theme from 'prism-react-renderer/themes/github';
import { LiveProvider } from 'react-live';

type Props = {
  code: string;
  disabled?: boolean;
  children: JSX.Element | JSX.Element[];
};

export const LiveCoding: FC<Props> = ({ code, disabled = false, children }) => (
  <LiveProvider
    code={code}
    theme={theme}
    disabled={disabled}
    transformCode={(c) =>
      c.replace(/class(?<class>="(\w|\d|[ -:])+")/g, 'className$<class>')
    }
  >
    {children}
  </LiveProvider>
);

export const LiveEditorStyles = {
  day: {
    borderLeft: '10px solid #60a5fa',
    borderRight: '1px solid #e5e7eb',
    borderTop: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
  },
};
