import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type ComponentCommonProps = {
  name: string;
  disclaimer?: string;
};

export interface Variant extends ComponentCommonProps {
  component: FunctionComponent;
}

export interface Component extends ComponentCommonProps {
  url: string;
  variants: Variant[];
}

export interface Block {
  title: string;
  icon?: IconDefinition;
  components: Component[];
}

export interface Section {
  title: 'Elements' | 'Modules';
  blocks: Block[];
}
