import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type Component = {
  name: string;
  url: string;
};

export type WithoutVariants = {
  component: FunctionComponent;
  variants?: never;
  redirect?: never;
};

export type WithVariants = {
  variants: (Component & WithoutVariants)[];
  redirect: string;
  component?: never;
};

// the component might have variants property
// when so then it has to have redirect prop also
// when not then it has to have component prop
export type ActualComponent = Component & (WithVariants | WithoutVariants);

export interface Section {
  title: string;
  icon?: IconDefinition;
  components: ActualComponent[];
}
