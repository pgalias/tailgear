import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {
  DangerAlert,
  DangerWithIconAlert,
  WarningAlert,
  WarningWithIconAlert,
  SuccessAlert,
  SuccessWithIconAlert,
  InfoAlert,
  InfoWithIconAlert,
  WithAdditionalContentAlert,
} from '../components/alerts';
import { Section, Component } from './types';

const simpleAlerts: Component = {
  name: 'Simple',
  url: '/alerts/simple',
  redirect: '/alerts/simple/info',
  variants: [
    {
      name: 'Info',
      url: '/alerts/simple/info',
      component: InfoAlert,
    },
    {
      name: 'Warning',
      url: '/alerts/simple/warning',
      component: WarningAlert,
    },
    {
      name: 'Danger',
      url: '/alerts/simple/danger',
      component: DangerAlert,
    },
    {
      name: 'Success',
      url: '/alerts/simple/success',
      component: SuccessAlert,
    },
  ],
};

const withIconAlerts: Component = {
  name: 'With icon',
  url: '/alerts/with-icon',
  redirect: '/alerts/with-icon/info',
  variants: [
    {
      name: 'Info',
      url: '/alerts/with-icon/info',
      component: InfoWithIconAlert,
    },
    {
      name: 'Warning',
      url: '/alerts/with-icon/warning',
      component: WarningWithIconAlert,
    },
    {
      name: 'Danger',
      url: '/alerts/with-icon/danger',
      component: DangerWithIconAlert,
    },
    {
      name: 'Success',
      url: '/alerts/with-icon/success',
      component: SuccessWithIconAlert,
    },
  ],
};

const withAdditionalContentAlert: Component = {
  name: 'With additional content',
  url: '/alerts/with-additional-content',
  component: WithAdditionalContentAlert,
};

export const Alerts: Section = {
  title: 'Alerts',
  icon: faExclamationCircle,
  components: [simpleAlerts, withIconAlerts, withAdditionalContentAlert],
};
