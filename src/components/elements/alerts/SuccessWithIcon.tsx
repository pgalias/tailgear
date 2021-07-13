import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const SuccessWithIconAlert: FunctionComponent = () => (
  <div
    className="bg-white text-gray-600 border-2 border-green-200 rounded text-left relative flex"
    role="alert"
  >
    <span
      className="bg-green-200 text-green-800 flex flex-col justify-center px-6"
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faCheckCircle} />
    </span>
    <span className="flex-grow py-4 px-8">Success with icon alert</span>
    <button type="button" className="px-6 text-3xl" aria-label="Dismiss">
      &times;
    </button>
  </div>
);
