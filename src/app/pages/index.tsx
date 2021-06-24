import React, { FC } from 'react';
import { RoutesList as StaticPages } from './statics';
import { RoutesList as Components } from './components';

export const Pages: FC = () => (
  <>
    <StaticPages />
    <Components />
  </>
);
