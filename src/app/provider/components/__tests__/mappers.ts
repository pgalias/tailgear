import { mapSections, mapBlocks, mapComponents } from '../mappers';
import { domainBlock1, domainComponent1, domainSection1 } from './fixtures';

describe('app::provided::components::mappers', () => {
  test('mapComponents should return a mapped component with additional info', () => {
    expect(
      mapComponents('domain_block_1', 'domain_section_1')(domainComponent1)
    ).toEqual({
      ...domainComponent1,
      id: expect.any(String),
      blockId: 'domain_block_1',
      sectionId: 'domain_section_1',
    });
  });

  test('mapBlocks should return a mapped block with mapped components', () => {
    expect(mapBlocks('domain_section_1')(domainBlock1)).toEqual({
      ...domainBlock1,
      id: expect.any(String),
      sectionId: 'domain_section_1',
      components: [
        {
          ...domainComponent1,
          id: expect.any(String),
          blockId: expect.any(String),
          sectionId: 'domain_section_1',
        },
      ],
    });
  });

  test('mapSections should return a mapped section with mapped blocks and components', () => {
    expect(mapSections(domainSection1)).toEqual({
      ...domainSection1,
      id: expect.any(String),
      blocks: [
        {
          ...domainBlock1,
          id: expect.any(String),
          sectionId: expect.any(String),
          components: [
            {
              ...domainComponent1,
              id: expect.any(String),
              blockId: expect.any(String),
              sectionId: expect.any(String),
            },
          ],
        },
      ],
    });
  });
});
