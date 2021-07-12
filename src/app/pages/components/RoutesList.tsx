import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { flattenAllBlocks, useSelector } from '../../provider/components';
import { BlockView } from './BlockView';

export const RoutesList: FC = () => {
  const allBlocks = useSelector(flattenAllBlocks);

  return (
    <>
      {allBlocks.map((block) => (
        <Route path={block.url} key={block.id} exact>
          <BlockView block={block} />
        </Route>
      ))}
    </>
  );
};
