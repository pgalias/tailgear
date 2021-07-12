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
            <Link
              name={block.title}
              href={block.url}
              icon={block.icon}
              key={block.id}
            />
          ))}
        </LinkGroup>
      ))}
    </>
  );
};
