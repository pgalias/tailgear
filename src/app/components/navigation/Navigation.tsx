import React, { FunctionComponent } from 'react';
import styles from './navigation.module.css';
import { useSections } from '../../store/components';
import { Section, StaticPage } from './components';
import { StaticPages } from '../../constants/staticPages';

export const Navigation: FunctionComponent = () => {
  const sections = useSections();

  return (
    <nav className={styles.navigation}>
      <div className={styles.wrapper}>
        {StaticPages.map((page) => (
          <StaticPage page={page} key={page.title} />
        ))}
        {sections.map((section) => (
          <Section section={section} key={section.id} />
        ))}
      </div>
    </nav>
  );
};
