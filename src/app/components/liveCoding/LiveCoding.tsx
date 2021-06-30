import React, { FC } from 'react';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/palenight';
import { LiveProvider } from 'react-live';
import { useColorScheme } from '../../provider/colorScheme';
import { ColorScheme } from '../../../helpers/colorScheme';

type Props = {
  code: string;
  disabled?: boolean;
  children: JSX.Element | JSX.Element[];
};

const editorThemeMapper = {
  [ColorScheme.LIGHT]: lightTheme,
  [ColorScheme.DARK]: darkTheme,
};

export const LiveCoding: FC<Props> = ({ code, disabled = false, children }) => {
  const { scheme } = useColorScheme();

  return (
    <LiveProvider
      code={code}
      theme={editorThemeMapper[scheme]}
      disabled={disabled}
      transformCode={(c) =>
        c.replace(/class(?<class>="(\w|\d|[ -:])+")/g, 'className$<class>')
      }
    >
      {children}
    </LiveProvider>
  );
};

export const LiveEditorStyles = {
  day: {
    borderLeft: '10px solid #60a5fa',
    borderRight: '1px solid #e5e7eb',
    borderTop: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
  },
};
