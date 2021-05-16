/* eslint-disable jsx-a11y/anchor-is-valid */
// no need to check that, it's only a code example
import React, { FunctionComponent } from 'react';

export const WithAdditionalContentAlert: FunctionComponent = () => (
  <div
    className="bg-blue-200 text-blue-800 rounded text-left py-4 px-8"
    role="alert"
  >
    <h4 className="text-xl font-bold mb-4">Header of the alert!</h4>
    <p className="text-base pb-4 border-b-2 border-blue-800 border-opacity-40">
      Message of the alert Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aspernatur assumenda beatae delectus deserunt dolore, eaque est eum
      exercitationem facilis itaque maxime minima nisi pariatur praesentium
      quasi ratione tempora totam voluptate.
    </p>
    <footer className="mt-4">
      <p className="text-sm">
        Footer of the alert. Put here eg. a{' '}
        <a className="font-black text-blue-900" href="#">
          link
        </a>
      </p>
    </footer>
  </div>
);
