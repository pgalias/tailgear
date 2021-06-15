import { faCodeBranch, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type StaticPage = {
  title: string;
  url: string;
  icon?: IconDefinition;
};

const Home: StaticPage = {
  title: 'Home',
  icon: faHome,
  url: '/',
};

const Contribution: StaticPage = {
  title: 'Contribution',
  icon: faCodeBranch,
  url: '/contribution',
};

export const StaticPages = [Home, Contribution];
