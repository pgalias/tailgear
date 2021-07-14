import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { EMPLOYEES, RandomMediumLargeAvatar } from './utils';

export const InSliderGlass: FC = () => (
  <div className="bg-glass-sample-light dark:bg-glass-sample-dark py-20">
    <section className="w-5/6 mx-auto backdrop-blur backdrop-filter rounded-lg p-8 shadow-lg">
      <h3 className="text-lg text-blue-900 dark:text-blue-200 font-bold mt-0 mb-4">
        Our team
      </h3>
      <article className="flex flex-wrap">
        <div className="w-full sm:w-2/5 rounded-lg overflow-hidden relative">
          <button
            type="button"
            className="absolute bottom-0 left-0 p-3 text-2xl"
          >
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className="text-lime-100"
            />
          </button>
          <RandomMediumLargeAvatar className="w-full h-full object-cover" />
          <button
            type="button"
            className="absolute bottom-0 right-0 p-3 text-2xl"
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              className="text-lime-100"
            />
          </button>
        </div>
        <div className="w-full sm:w-3/5 sm:p-8 flex flex-col justify-center">
          <div className="mb-4">
            <h4 className="m-0 text-blue-900 dark:text-blue-200 font-bold">
              Name
            </h4>
            <p className="m-0 text-blueGray-400 text-sm">{EMPLOYEES[3].name}</p>
          </div>
          <div className="mb-4">
            <h4 className="m-0 text-blue-900 dark:text-blue-200 font-bold">
              Title
            </h4>
            <p className="m-0 text-blueGray-400 text-sm">
              {EMPLOYEES[3].title}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="m-0 text-blue-900 dark:text-blue-200 font-bold">
              Description
            </h4>
            <p className="m-0 text-blueGray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
              aperiam deleniti dolore doloribus, ex minus nesciunt. Aperiam
              architecto incidunt inventore maxime molestias obcaecati placeat
              quae quos sequi. Illo, ipsa?
            </p>
          </div>
          <div className="sm:mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl pr-2.5"
            >
              <span className="sr-only">twitter</span>
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-blue-400"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl pr-2.5"
            >
              <span className="sr-only">facebook</span>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-blue-600"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl pr-2.5"
            >
              <span className="sr-only">linkedin</span>
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-800" />
            </a>
          </div>
        </div>
      </article>
    </section>
  </div>
);
