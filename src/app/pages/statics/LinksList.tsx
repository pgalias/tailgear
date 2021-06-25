import React, { FC } from 'react';
import { StaticPages } from '../../constants/staticPages';
import { Link } from '../../components/link';

export const LinksList: FC = () => (
  <>
    {StaticPages.map((page) => (
      <Link
        name={page.title}
        href={page.url}
        icon={page.icon}
        key={page.title}
      />
    ))}
  </>
);
