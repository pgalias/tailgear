import React, { FC, Fragment } from 'react';
import parse from 'html-react-parser';
import { Variant as VariantType } from '../../../sections/types';
import { Variant } from './Variant';
import styles from './styles.module.css';
import {
  BlockId,
  findBlockBy,
  findSectionBy,
  SectionId,
  useSelector,
} from '../../store/components';

type Props = {
  name: string;
  variants: VariantType[];
  disclaimer?: string;
  blockId: BlockId;
  sectionId: SectionId;
};

export const ComponentView: FC<Props> = ({
  name,
  variants,
  disclaimer,
  blockId,
  sectionId,
}) => {
  const block = useSelector(findBlockBy(blockId));
  const section = useSelector(findSectionBy(sectionId));
  const variantsCount = variants.length;

  return (
    <div className={styles.component}>
      <h4 className={styles.breadcrumbs}>
        {section?.title} {'>'} {block?.title} {'>'} {name}
      </h4>
      {variants.map((variant, index) => (
        <Fragment key={variant.name}>
          <Variant
            name={variant.name}
            component={variant.component}
            isNameVisible={variantsCount > 1}
            disclaimer={variant.disclaimer}
          />
          {index < variantsCount - 1 && (
            <hr className={styles.variantDivider} />
          )}
        </Fragment>
      ))}
      {disclaimer && (
        <blockquote
          className={`${styles.disclaimer} ${styles.componentDisclaimer}`}
        >
          {parse(disclaimer)}
        </blockquote>
      )}
    </div>
  );
};
