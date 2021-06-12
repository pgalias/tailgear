import {
  ComponentId,
  Block,
  Section,
  ParentComponent,
  ChildComponent,
  BlockId,
} from './types';

export const flattenAllBlocks = (store: Section[]): Block[] =>
  store.flatMap(({ blocks }) => blocks);

export const flattenAllComponents = (
  store: Section[]
): Array<ParentComponent | ChildComponent> =>
  flattenAllBlocks(store)
    .flatMap(({ components }) => components)
    .flatMap((components) => [components, ...(components?.variants || [])]);

export const findBlockBy = (id: BlockId) => (
  store: Section[]
): Block | undefined =>
  flattenAllBlocks(store).find((block) => block.id === id);

export const findVariantsForComponent = (id: ComponentId) => (
  store: Section[]
): ChildComponent[] => {
  const allComponents = flattenAllComponents(store);
  const component = allComponents.find((comp) => comp.id === id);

  if (!component) {
    return [];
  }

  if (!(component as ChildComponent)?.parentId) {
    return [];
  }

  return allComponents.filter(
    (comp) =>
      (comp as ChildComponent)?.parentId ===
      (component as ChildComponent)?.parentId
  ) as ChildComponent[];
};
