import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ComponentId,
  findSectionBy,
  findVariantsForComponent,
  useSelector,
} from '../store/components';
import styles from './preview.module.css';

type Props = {
  id: ComponentId;
  children: React.ReactElement;
};

export const Preview: FunctionComponent<Props> = ({ id, children }) => {
  const variants = useSelector(findVariantsForComponent(id));
  const section = useSelector(findSectionBy(variants[0].sectionId));

  const setFocusOnLink = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    (event?.target as HTMLAnchorElement)?.focus();
  };

  return (
    <div className={styles.preview}>
      <ul className={styles.variants}>
        {variants?.map((variant) => (
          <li className={styles.variantWrapper} key={variant.id}>
            <NavLink
              to={variant.url}
              aria-label={`${variant.name} ${section?.title} variant`}
              aria-selected={id === variant.id}
              aria-disabled={id === variant.id}
              onClick={setFocusOnLink}
              className={styles.variant}
              activeClassName={styles.selectedVariant}
            >
              {variant.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.code}>{children}</div>
    </div>
  );
};
