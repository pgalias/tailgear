import React, { FunctionComponent } from 'react';

export const BasicButton: FunctionComponent = () => (
  <button
    type="button"
    className="bg-blue-200 hover:bg-blue-300 px-8 py-4 rounded text-gray-600 text-sm transition-colors"
  >
    Button
  </button>
);
