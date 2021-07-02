import { Block, Component, Section } from '../types';
import {
  Block as DomainBlock,
  Component as DomainComponent,
  Section as DomainSection,
} from '../../../../sections/types';

/**
 * COMPONENTS
 */
export const component1: Component = {
  blockId: 'block_1',
  id: 'component_1',
  name: 'component 1',
  sectionId: 'section_1',
  url: '/component-1',
  variants: [],
};

export const component2: Component = {
  blockId: 'block_1',
  id: 'component_2',
  name: 'component 2',
  sectionId: 'section_1',
  url: '/component-2',
  variants: [],
};

export const component3: Component = {
  blockId: 'block_2',
  id: 'component_3',
  name: 'component 3',
  sectionId: 'section_1',
  url: '/component-3',
  variants: [],
};

export const component4: Component = {
  blockId: 'block_3',
  id: 'component_4',
  name: 'component 4',
  sectionId: 'section_2',
  url: '/component-4',
  variants: [],
};

/**
 * BLOCKS
 */
export const block1: Block = {
  components: [component1, component2],
  id: 'block_1',
  sectionId: 'section_1',
  title: 'block 1',
};

export const block2: Block = {
  components: [component3],
  id: 'block_2',
  sectionId: 'section_1',
  title: 'block 2',
};

export const block3: Block = {
  components: [component4],
  id: 'block_3',
  sectionId: 'section_2',
  title: 'block 3',
};

/**
 * SECTIONS
 */
export const section1: Section = {
  id: 'section_1',
  title: 'Elements',
  blocks: [block1, block2],
};

export const section2: Section = {
  id: 'section_2',
  title: 'Modules',
  blocks: [block3],
};

/**
 * DOMAIN COMPONENTS
 */
export const domainComponent1: DomainComponent = {
  name: 'domain component 1',
  url: '/domain-component-1',
  variants: [],
};

/**
 * DOMAIN BLOCKS
 */
export const domainBlock1: DomainBlock = {
  components: [domainComponent1],
  title: 'domain block 1',
};

/**
 * DOMAIN SECTIONS
 */
export const domainSection1: DomainSection = {
  blocks: [domainBlock1],
  title: 'Elements',
};
