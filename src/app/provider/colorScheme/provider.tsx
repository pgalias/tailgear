import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useState,
} from 'react';
import {
  ColorScheme,
  getColorScheme,
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

  const toggleScheme = () => {
    toggleColorScheme();
    setScheme(getColorScheme());
  };

  return (
    <Context.Provider value={{ scheme, toggleScheme }}>
      {children}
    </Context.Provider>
  );
};
