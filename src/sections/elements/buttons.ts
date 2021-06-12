import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { BasicButton } from '../../components/buttons';
import { Block } from '../types';

export const Buttons: Block = {
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
