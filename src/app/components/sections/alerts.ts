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
} from '../../../components/alerts';
import { Section } from '../types';

export const Alerts: Section = {
  title: 'Alerts',
  icon: faExclamationCircle,
  components: {
    info: { component: InfoAlert, url: '/alerts/info' },
    'info + icon': { component: InfoWithIconAlert, url: '/alerts/info-icon' },
    warning: { component: WarningAlert, url: '/alerts/warning' },
    'warning + icon': {
      component: WarningWithIconAlert,
      url: '/alerts/warning-icon',
    },
    danger: { component: DangerAlert, url: '/alerts/danger' },
    'danger + icon': {
      component: DangerWithIconAlert,
      url: '/alerts/danger-icon',
    },
    success: { component: SuccessAlert, url: '/alerts/success' },
    'success + icon': {
      component: SuccessWithIconAlert,
      url: '/alerts/success-icon',
    },
  },
};
