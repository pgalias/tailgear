import { FunctionComponent } from 'react';
import { BasicAlert } from '../../components/alerts/Basic';

type ComponentName = string;

export type Components = Record<
  ComponentName,
  { component: FunctionComponent; url: string }
>;

export interface Section {
  title: string;
  components: Components;
}

const Alerts: Section = {
  title: 'Alerts',
  components: {
    basic: { component: BasicAlert, url: '/alerts/basic' },
  },
};

export default {
  Alerts,
};
