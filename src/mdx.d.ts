/// <reference types="@mdx-js/loader" />

declare module '*.mdx' {
  import { FC } from 'react';

  const value: FC;
  export default value;
}
