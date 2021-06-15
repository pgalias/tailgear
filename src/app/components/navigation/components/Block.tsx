import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Block as BlockType } from '../../../store/components';
import styles from './style.module.css';
import { Component } from './Component';

type Props = {
  block: BlockType;
};

export const Block: FC<Props> = ({ block: { icon, title, components } }) => (
  <div className={styles.block}>
    <h4 className={styles.blockTitle}>
      {icon && <FontAwesomeIcon className={styles.blockIcon} icon={icon} />}
      <span className={styles.blockName}> {title}</span>
    </h4>
    <ul className={styles.blockComponents}>
      {components.map((component) => (
        <li key={component.id}>
          <Component component={component} />
        </li>
      ))}
    </ul>
  </div>
);
