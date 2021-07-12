import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { BasicButton } from '../../components/buttons';
import { Block } from '../types';

export const Buttons: Block = {
  title: 'Buttons',
  icon: faMousePointer,
  url: '/buttons',
  components: [
    {
      name: 'Basic',
      url: '/buttons/basic',
      variants: [{ name: 'Basic', component: BasicButton }],
    },
  ],
};
