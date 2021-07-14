import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {
  MinimalisticBigPhotos,
  MinimalisticCards,
} from '../../components/templates/team';
import { Block, Component } from '../types';
import { InSliderNormal } from '../../components/templates/team/inSliderNormal';
import { InSliderGlass } from '../../components/templates/team/inSliderGlass';

const minimalistic: Component = {
  name: 'Minimalistic',
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

const inSlider: Component = {
  name: 'In slider',
  variants: [
    {
      name: 'Normal',
      component: InSliderNormal,
    },
    {
      name: 'Glass',
      component: InSliderGlass,
    },
  ],
  disclaimer:
    'Those samples are using an extended color palette from Tailwind. See more <a href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference" target="_blank" rel="noopener">here</a>.<br/>Those samples are using <a href="https://fontawesome.com/" target="_blank" rel="noopener">Fontawesome</a> icons.',
};

export const Team: Block = {
  title: 'Team',
  icon: faUsers,
  url: '/team',
  components: [minimalistic, inSlider],
};
