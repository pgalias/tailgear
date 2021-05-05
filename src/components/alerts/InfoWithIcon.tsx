import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const InfoWithIconAlert: FunctionComponent = () => (
  <div
    className="bg-white text-gray-600 border-2 border-blue-200 rounded text-left relative flex"
    role="alert"
  >
    <span
      className="bg-blue-200 text-blue-800 flex flex-col justify-center px-6"
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faInfoCircle} />
    </span>
    <span className="flex-grow py-4 px-8">Info with icon alert</span>
    <button type="button" className="px-6 text-3xl" aria-label="Dismiss">
      &times;
    </button>
  </div>
);
