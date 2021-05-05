import React, { FunctionComponent } from 'react';

export const SuccessAlert: FunctionComponent = () => (
  <div
    className="bg-green-200 text-green-800 rounded text-left relative flex"
    role="alert"
  >
    <span className="flex-grow py-4 px-8">Simple success alert</span>
    <button
      type="button"
      className="px-6 text-3xl text-gray-600"
      aria-label="Dismiss"
    >
      &times;
    </button>
  </div>
);
