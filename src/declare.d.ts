declare module '@mdx-js/react' {
  import { FC } from 'react';

  type Props = {
    children: JSX.Element | JSX.Element[];
    components: unknown;
  };

  export const MDXProvider: FC<Props> = ({ children, components }) => {};
}

declare module 'lodash.uniqueid' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { uniqueId } from '@types/lodash';

  export default uniqueId;
}
