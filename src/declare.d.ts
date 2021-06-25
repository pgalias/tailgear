declare module '@mdx-js/react' {
  import { FC } from 'react';

  type Props = {
    children: JSX.Element | JSX.Element[];
    components: unknown;
  };

  export const MDXProvider: FC<Props> = ({ children, components }) => {};
}
