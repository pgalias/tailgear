import { FunctionComponent } from 'react';

type ComponentName = string;

export type Components = Record<
  ComponentName,
  { component: FunctionComponent; url: string }
>;

export interface Section {
  title: string;
  components: Components;
}
