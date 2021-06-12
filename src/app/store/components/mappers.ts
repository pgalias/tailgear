import uniqueId from 'lodash/uniqueId';
import {
  Component as DomainComponent,
  Block as DomainBlock,
  Section as DomainSection,
} from '../../../sections/types';
import {
  ChildComponent,
  ComponentId,
  ParentComponent,
  Block,
  BlockId,
  Section,
  SectionId,
} from './types';

export const mapVariants = (
  parentId: ComponentId,
  blockId: BlockId,
  sectionId: SectionId
) => (component: DomainComponent): ChildComponent => ({
  ...component,
  id: uniqueId('Component_'),
  parentId,
  blockId,
  sectionId,
});

export const mapComponents = (blockId: BlockId, sectionId: SectionId) => (
  component: DomainComponent
): ParentComponent => {
  const id = uniqueId('Component_');
  const variants: ChildComponent[] =
    component?.variants?.map(mapVariants(id, blockId, sectionId)) ?? [];

  return {
    ...component,
    id,
    blockId,
    sectionId,
    variants,
  };
};

export const mapBlocks = (sectionId: SectionId) => (
  block: DomainBlock
): Block => {
  const id = uniqueId('Block_');
  const components: ParentComponent[] = block.components.map(
    mapComponents(id, sectionId)
  );

  return { ...block, id, sectionId, components };
};

export const mapSections = (section: DomainSection): Section => {
  const id = uniqueId('Section_');
  const blocks: Block[] = section.blocks.map(mapBlocks(id));

  return { ...section, id, blocks };
};
