import React, { FC, Fragment } from 'react';
import parse from 'html-react-parser';
import { Variant as VariantType } from '../../../sections/types';
import { Variant } from './Variant';
import styles from './styles.module.css';
import { BlockId, findBlockBy, useSelector } from '../../provider/components';

type Props = {
  name: string;
  variants: VariantType[];
  disclaimer?: string;
  blockId: BlockId;
};

export const ComponentView: FC<Props> = ({
  name,
  variants,
  disclaimer,
  blockId,
}) => {
  const block = useSelector(findBlockBy(blockId));
  const variantsCount = variants.length;

  return (
    <div className={styles.component}>
      <h4 className={styles.componentGroup}>
        {name} {block?.title}{' '}
        <sup className={styles.componentGroupCount}>{variants.length}</sup>
      </h4>
      {variants.map((variant, index) => (
        <Fragment key={variant.name}>
          <Variant
            name={variantsCount > 1 ? variant.name : undefined}
            component={variant.component}
            disclaimer={variant.disclaimer}
          />
          {index < variantsCount - 1 && (
            <hr className={styles.variantDivider} />
          )}
        </Fragment>
      ))}
      {disclaimer && (
        <blockquote
          role="blockquote"
          className={`${styles.disclaimer} ${styles.componentDisclaimer}`}
        >
          {parse(disclaimer)}
        </blockquote>
      )}
    </div>
  );
};
