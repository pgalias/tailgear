import React, { FunctionComponent } from 'react';
import styles from './navigation.module.css';
import { useSections } from '../../store/components';
import { StaticPages } from '../../constants/staticPages';
import { Link, LinkGroup } from '../link';

export const Navigation: FunctionComponent = () => {
  const sections = useSections();

  return (
    <nav className={styles.navigation}>
      <div className={styles.wrapper}>
        {StaticPages.map((page) => (
          <Link
            name={page.title}
            href={page.url}
            icon={page.icon}
            key={page.title}
          />
        ))}
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
      </div>
    </nav>
  );
};
