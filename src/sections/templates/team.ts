import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {
  MinimalisticBigPhotos,
  MinimalisticCards,
} from '../../components/templates/team';
import { Block, Component } from '../types';

const minimalistic: Component = {
  name: 'Minimalistic',
  url: '/team/minimalistic',
  variants: [
    {
      name: 'Cards',
      component: MinimalisticCards,
    },
    {
      name: 'Big photos',
      component: MinimalisticBigPhotos,
    },
  ],
  disclaimer:
    'Those samples are using an extended color palette from Tailwind. See more <a href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference" target="_blank" rel="noopener">here</a>',
};

export const Team: Block = {
  title: 'Team',
  icon: faUsers,
  components: [minimalistic],
};
