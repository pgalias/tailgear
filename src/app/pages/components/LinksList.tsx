import React, { FC } from 'react';
import { useSelector, selectSections } from '../../provider/components';
import { Link, LinkGroup } from '../../components/link';

export const LinksList: FC = () => {
  const sections = useSelector(selectSections);

  return (
    <>
      {sections.map((section) => (
        <LinkGroup title={section.title} key={section.id}>
          {section.blocks.map((block) => (
            <LinkGroup title={block.title} icon={block.icon} key={block.id}>
              {block.components.map((component) => (
                <Link
                  name={component.name}
                  section={block.title}
                  href={component.url}
                  key={component.id}
                />
              ))}
            </LinkGroup>
          ))}
        </LinkGroup>
      ))}
    </>
  );
};
