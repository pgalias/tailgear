import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type ComponentCommonProps = {
  name: string;
  url: string;
  disclaimer?: string;
};

export type ComponentWithoutVariantsProps = {
  component: FunctionComponent;
  variants?: never;
  redirect?: never;
};

export type ComponentWithVariantsProps = {
  variants: (ComponentCommonProps & ComponentWithoutVariantsProps)[];
  redirect: string;
  component?: never;
};

// the component might have variants property
// when so then it has to have redirect prop also
// when not then it has to have component prop
// export type Component = Comp & (WithVariants | WithoutVariants);
// export type Component = Comp & AllOrNone<WithVariants, WithoutVariants>;
export type Component = ComponentCommonProps &
  (ComponentWithVariantsProps | ComponentWithoutVariantsProps);

export interface Block {
  title: string;
  icon?: IconDefinition;
  components: Component[];
}

export interface Section {
  title: string;
  blocks: Block[];
}
