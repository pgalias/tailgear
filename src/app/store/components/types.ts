import {
  Section as DomainSection,
  Component as DomainComponent,
} from '../../../sections/types';
import { AllOrNone } from '../../../helpers/types/allOrNone';

export type SectionId = string;
export type ComponentId = string;

export type Section = Omit<DomainSection, 'components'> & {
  id: SectionId;
  components: ParentComponent[];
};

export type ParentComponent = Omit<DomainComponent, 'variants'> & {
  id: ComponentId;
  sectionId: SectionId;
} & AllOrNone<{ variants: ChildComponent[] }>;

export type ChildComponent = Omit<DomainComponent, 'variants' | 'redirect'> & {
  id: ComponentId;
  parentId: ComponentId;
  sectionId: SectionId;
};
