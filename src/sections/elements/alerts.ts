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
} from '../../components/alerts';
import { Block, Component } from '../types';

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

const disclaimerForIconAlerts = (name: string, link: string): string =>
  `Icon used here: <a href="${link}" target="_blank" rel='noopener'>${name}</a> from Font Awesome 5`;

const withIconAlerts: Component = {
  name: 'With icon',
  url: '/alerts/with-icon',
  redirect: '/alerts/with-icon/info',
  variants: [
    {
      name: 'Info',
      url: '/alerts/with-icon/info',
      component: InfoWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'info-circle',
        'https://fontawesome.com/icons/info-circle?style=solid'
      ),
    },
    {
      name: 'Warning',
      url: '/alerts/with-icon/warning',
      component: WarningWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'exclamation-circle',
        'https://fontawesome.com/icons/exclamation-circle?style=solid'
      ),
    },
    {
      name: 'Danger',
      url: '/alerts/with-icon/danger',
      component: DangerWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'ban',
        'https://fontawesome.com/icons/ban?style=solid'
      ),
    },
    {
      name: 'Success',
      url: '/alerts/with-icon/success',
      component: SuccessWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'check-circle',
        'https://fontawesome.com/icons/check-circle?style=solid'
      ),
    },
  ],
};

const withAdditionalContentAlert: Component = {
  name: 'With additional content',
  url: '/alerts/with-additional-content',
  component: WithAdditionalContentAlert,
};

export const Alerts: Block = {
  title: 'Alerts',
  icon: faExclamationCircle,
  components: [simpleAlerts, withIconAlerts, withAdditionalContentAlert],
};
