import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Minimalistic } from '../../components/templates/team';
import { Block, Component } from '../types';

const minimalistic: Component = {
  name: 'Minimalistic',
  variants: [
    {
      name: 'Minimalistic',
      component: Minimalistic,
      disclaimer:
        'This sample is using an extended color palette from Tailwind. See more <a href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference" target="_blank" rel="noopener">here</a>',
    },
  ],
};

export const Team: Block = {
  title: 'Team',
  icon: faUsers,
  url: '/team',
  components: [minimalistic],
};
