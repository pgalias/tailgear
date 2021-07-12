import { Block, BlockId, Section, SectionId } from './types';

export const selectSections = (store: Section[]): Section[] => store;

export const flattenAllBlocks = (store: Section[]): Block[] =>
  store.flatMap(({ blocks }) => blocks);

export const findBlockBy = (id: BlockId) => (
  store: Section[]
): Block | undefined =>
  flattenAllBlocks(store).find((block) => block.id === id);

export const findSectionBy = (id: SectionId) => (
  store: Section[]
): Section | undefined => store.find((section) => section.id === id);
