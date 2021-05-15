import uniqueId from 'lodash/uniqueId';
import {
  Component as DomainComponent,
  Section as DomainSection,
} from '../../../sections/types';
import {
  ChildComponent,
  ComponentId,
  ParentComponent,
  Section,
  SectionId,
} from './types';

export const mapVariants = (parentId: ComponentId, sectionId: SectionId) => (
  component: DomainComponent
): ChildComponent => ({
  ...component,
  id: uniqueId('Component_'),
  parentId,
  sectionId,
});

export const mapComponents = (sectionId: SectionId) => (
  component: DomainComponent
): ParentComponent => {
  const id = uniqueId('Component_');
  const variants: ChildComponent[] =
    component?.variants?.map(mapVariants(id, sectionId)) ?? [];

  return {
    ...component,
    id,
    sectionId,
    variants,
  };
};

export const mapSections = (section: DomainSection): Section => {
  const id = uniqueId('Section_');
  const components: ParentComponent[] = section.components.map(
    mapComponents(id)
  );

  return { ...section, id, components };
};
