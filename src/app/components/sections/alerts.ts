import { BasicAlert } from '../../../components/alerts';
import { Section } from '../types';

export const Alerts: Section = {
  title: 'Alerts',
  components: {
    basic: { component: BasicAlert, url: '/alerts/basic' },
  },
};
