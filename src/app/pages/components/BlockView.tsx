import React, { FC } from 'react';
import { Block } from '../../provider/components';
import { ComponentView } from './ComponentView';

type Props = {
  block: Block;
};

export const BlockView: FC<Props> = ({ block }) => (
  <>
    {block.components.map((component) => (
      <ComponentView
        name={component.name}
        variants={component.variants}
        blockId={component.blockId}
        disclaimer={component.disclaimer}
        key={component.id}
      />
    ))}
  </>
);
