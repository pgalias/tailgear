import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const WarningWithIconAlert: FunctionComponent = () => (
  <div
    className="bg-white text-gray-600 border-2 border-yellow-200 rounded text-left relative flex"
    role="alert"
  >
    <span
      className="bg-yellow-200 text-yellow-800 flex flex-col justify-center px-6"
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faExclamationCircle} />
    </span>
    <span className="flex-grow py-4 px-8">Warning with icon alert</span>
    <button type="button" className="px-6 text-3xl" aria-label="Dismiss">
      &times;
    </button>
  </div>
);
