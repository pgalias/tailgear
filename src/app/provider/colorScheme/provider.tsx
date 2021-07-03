import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  ColorScheme,
  getColorScheme,
  applyColorScheme,
  toggleColorScheme,
} from '../../../helpers/colorScheme';

type ColorSchemeContext = {
  scheme: ColorScheme;
  toggleScheme: () => void;
};

const Context = createContext<ColorSchemeContext | undefined>(undefined);

export const useColorScheme = (): ColorSchemeContext => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useColorSchema must be used within a ColorSchemeContext');
  }

  return context;
};

export const ColorSchemeProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [scheme, setScheme] = useState(getColorScheme());

  useEffect(() => {
    applyColorScheme(scheme);
  }, [scheme]);

  const toggleScheme = () => {
    setScheme(toggleColorScheme);
  };

  return (
    <Context.Provider value={{ scheme, toggleScheme }}>
      {children}
    </Context.Provider>
  );
};
