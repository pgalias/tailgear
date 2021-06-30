import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { Section } from './types';
import Sections from '../../../sections';
import { mapSections } from './mappers';

type ComponentsContext = Section[];

const Context = React.createContext<ComponentsContext | undefined>(undefined);

export const useSelector = <T,>(selector: (store: Section[]) => T): T => {
  const sections = useContext(Context) as ComponentsContext;

  if (!sections?.length) {
    throw new Error('Please use within ComponentContext');
  }

  return selector(sections);
};

export const useSections = (): ComponentsContext => {
  const sections = useContext(Context) as ComponentsContext;

  if (!sections?.length) {
    throw new Error('Please use within ComponentContext');
  }

  return sections;
};

export const ComponentsProvider: FunctionComponent<{
  children: ReactElement;
}> = ({ children }) => {
  return (
    <Context.Provider value={Sections.map(mapSections)}>
      {children}
    </Context.Provider>
  );
};
