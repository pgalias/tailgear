import { Block, Section, Component, BlockId, SectionId } from './types';

export const flattenAllBlocks = (store: Section[]): Block[] =>
  store.flatMap(({ blocks }) => blocks);

export const flattenAllComponents = (store: Section[]): Component[] =>
  flattenAllBlocks(store).flatMap(({ components }) => components);

export const findBlockBy = (id: BlockId) => (
  store: Section[]
): Block | undefined =>
  flattenAllBlocks(store).find((block) => block.id === id);

export const findSectionBy = (id: SectionId) => (
  store: Section[]
): Section | undefined => store.find((section) => section.id === id);
