import {
  ComponentId,
  Section,
  ParentComponent,
  ChildComponent,
  SectionId,
} from './types';

export const flattenAllComponents = (
  store: Section[]
): Array<ParentComponent | ChildComponent> =>
  store
    .flatMap(({ components }) => components)
    .flatMap((components) => [components, ...(components?.variants || [])]);

export const findSectionBy = (id: SectionId) => (
  store: Section[]
): Section | undefined => store.find((section) => section.id === id);

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
