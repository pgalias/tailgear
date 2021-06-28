import uniqueId from 'lodash.uniqueid';
import {
  Component as DomainComponent,
  Block as DomainBlock,
  Section as DomainSection,
} from '../../../sections/types';
import {
  ComponentId,
  Component,
  Block,
  BlockId,
  Section,
  SectionId,
} from './types';

export const mapComponents = (blockId: BlockId, sectionId: SectionId) => (
  component: DomainComponent
): Component => {
  const id: ComponentId = uniqueId('Component_');

  return {
    ...component,
    id,
    blockId,
    sectionId,
  };
};

export const mapBlocks = (sectionId: SectionId) => (
  block: DomainBlock
): Block => {
  const id = uniqueId('Block_');
  const components: Component[] = block.components.map(
    mapComponents(id, sectionId)
  );

  return { ...block, id, sectionId, components };
};

export const mapSections = (section: DomainSection): Section => {
  const id = uniqueId('Section_');
  const blocks: Block[] = section.blocks.map(mapBlocks(id));

  return { ...section, id, blocks };
};
