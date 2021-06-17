import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  findBlockBy,
  Component as ComponentType,
  useSelector,
} from '../../../store/components';
import styles from './style.module.css';

type Props = {
  component: ComponentType;
};

export const Component: FC<Props> = ({ component: { blockId, url, name } }) => {
  const block = useSelector(findBlockBy(blockId));

  return (
    <NavLink to={url} activeClassName={styles.activeLink}>
      {block?.title && <span className="sr-only">{block.title}</span>}
      <span className={styles.componentName}>{name}</span>
    </NavLink>
  );
};
