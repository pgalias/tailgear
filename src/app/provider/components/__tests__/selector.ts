import {
  selectSections,
  flattenAllBlocks,
  flattenAllComponents,
  findBlockBy,
  findSectionBy,
} from '../selector';
import {
  block1,
  block2,
  block3,
  component1,
  component2,
  component3,
  component4,
  section1,
  section2,
} from './fixtures';

describe('app::provider::components::selectors', () => {
  const store = [section1, section2];

  test('selectSections should return all sections from the store', () => {
    expect(selectSections(store)).toEqual(store);
  });

  test('flattenAllBlocks should return a flat array with all blocks from all sections', () => {
    expect(flattenAllBlocks(store)).toEqual([block1, block2, block3]);
  });

  test('flattenAllComponents should return a flat array with all components from all blocks and sections', () => {
    expect(flattenAllComponents(store)).toEqual([
      component1,
      component2,
      component3,
      component4,
    ]);
  });

  test('findBlockBy should return a found block by provided id', () => {
    expect(findBlockBy('block_1')(store)).toEqual(block1);
  });

  test('findBlockBy should return undefined when block cannot be found', () => {
    expect(findBlockBy('block_55')(store)).toBeUndefined();
  });

  test('findSectionBy should return a section by provided id', () => {
    expect(findSectionBy('section_2')(store)).toEqual(section2);
  });

  test('findSectionBy should return undefined when section cannot be found', () => {
    expect(findSectionBy('section_54')(store)).toBeUndefined();
  });
});
