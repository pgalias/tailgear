import React, { FC } from 'react';
import { Section as SectionType } from '../../../store/components';
import styles from './style.module.css';
import { Block } from './Block';

type Props = {
  section: SectionType;
};

export const Section: FC<Props> = ({ section: { title, blocks } }) => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>{title}</h3>
    <ul className={styles.sectionBlocks}>
      {blocks.map((block) => (
        <li key={block.id}>
          <Block block={block} />
        </li>
      ))}
    </ul>
  </div>
);
