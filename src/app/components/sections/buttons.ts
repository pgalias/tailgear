import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { BasicButton } from '../../../components/buttons';
import { Section } from '../types';

export const Buttons: Section = {
  title: 'Buttons',
  icon: faMousePointer,
  components: [
    {
      name: 'basic',
      url: '/buttons/basic',
      component: BasicButton,
    },
  ],
};
