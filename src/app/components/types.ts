import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

type ComponentName = string;

export type Components = Record<
  ComponentName,
  { component: FunctionComponent; url: string }
>;

export interface Section {
  title: string;
  icon?: IconDefinition;
  components: Components;
}
