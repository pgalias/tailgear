import {
  Block as DomainBlock,
  Component as DomainComponent,
  Section as DomainSection,
} from '../../../sections/types';
import { AllOrNone } from '../../../helpers/types/allOrNone';

export type SectionId = string;
export type BlockId = string;
export type ComponentId = string;

export type Section = Omit<DomainSection, 'blocks'> & {
  id: SectionId;
  blocks: Block[];
};

export type Block = Omit<DomainBlock, 'components'> & {
  id: BlockId;
  sectionId: SectionId;
  components: ParentComponent[];
};

export type ParentComponent = Omit<DomainComponent, 'variants'> & {
  id: ComponentId;
  blockId: BlockId;
  sectionId: SectionId;
} & AllOrNone<{ variants: ChildComponent[] }>;

export type ChildComponent = Omit<DomainComponent, 'variants' | 'redirect'> & {
  id: ComponentId;
  parentId: ComponentId;
  blockId: BlockId;
  sectionId: SectionId;
};
