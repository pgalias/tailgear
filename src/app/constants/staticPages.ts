import { faCodeBranch, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FC } from 'react';

import HomeContent from '../staticPages/home.mdx';
import ContributionContent from '../staticPages/contribution.mdx';

export type StaticPage = {
  title: string;
  url: string;
  content: FC;
  icon?: IconDefinition;
};

const Home: StaticPage = {
  title: 'Home',
  icon: faHome,
  url: '/',
  content: HomeContent,
};

const Contribution: StaticPage = {
  title: 'Contribution',
  icon: faCodeBranch,
  url: '/contribution',
  content: ContributionContent,
};

export const StaticPages = [Home, Contribution];
