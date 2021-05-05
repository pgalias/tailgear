import React, { FunctionComponent } from 'react';

export const DangerAlert: FunctionComponent = () => (
  <div
    className="bg-red-200 text-red-800 rounded text-left relative flex"
    role="alert"
  >
    <span className="flex-grow py-4 px-8">Simple danger alert</span>
    <button
      type="button"
      className="px-6 text-3xl text-gray-600"
      aria-label="Dismiss"
    >
      &times;
    </button>
  </div>
);
