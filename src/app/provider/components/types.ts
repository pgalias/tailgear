import {
  Block as DomainBlock,
  Component as DomainComponent,
  Section as DomainSection,
} from '../../../sections/types';

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
  components: Component[];
};

export interface Component extends DomainComponent {
  id: ComponentId;
  blockId: BlockId;
  sectionId: SectionId;
}
