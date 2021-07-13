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
} from '../../components/elements/alerts';
import { Block, Component } from '../types';

const simpleAlerts: Component = {
  name: 'Simple',
  url: '/alerts/simple',
  variants: [
    { name: 'Info', component: InfoAlert },
    { name: 'Warning', component: WarningAlert },
    { name: 'Danger', component: DangerAlert },
    { name: 'Success', component: SuccessAlert },
  ],
};

const disclaimerForIconAlerts = (name: string, link: string): string =>
  `Icon used here: <a href="${link}" target="_blank" rel='noopener'>${name}</a> from Font Awesome 5`;

const withIconAlerts: Component = {
  name: 'With icon',
  url: '/alerts/with-icon',
  variants: [
    {
      name: 'Info',
      component: InfoWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'info-circle',
        'https://fontawesome.com/icons/info-circle?style=solid'
      ),
    },
    {
      name: 'Warning',
      component: WarningWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'exclamation-circle',
        'https://fontawesome.com/icons/exclamation-circle?style=solid'
      ),
    },
    {
      name: 'Danger',
      component: DangerWithIconAlert,
      disclaimer: disclaimerForIconAlerts(
        'ban',
        'https://fontawesome.com/icons/ban?style=solid'
      ),
    },
    {
      name: 'Success',
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
  variants: [
    { name: 'With body and footer', component: WithAdditionalContentAlert },
  ],
};

export const Alerts: Block = {
  title: 'Alerts',
  icon: faExclamationCircle,
  components: [simpleAlerts, withIconAlerts, withAdditionalContentAlert],
};
