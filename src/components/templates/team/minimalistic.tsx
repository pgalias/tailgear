import React, { FC } from 'react';

export const Minimalistic: FC = () => (
  <section className="text-gray-800 dark:text-gray-50">
    <h2 className="text-3xl text-center mb-4">Our team</h2>
    <p className="text-center mb-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      consequatur culpa delectus dolor expedita explicabo facilis fuga fugiat
      incidunt ipsa numquam obcaecati quas saepe sequi similique sint velit,
      vero voluptas.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/85"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/70"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            Jane Doe
          </h3>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
      </article>
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/65"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            Johnny Doe
          </h3>
          <p className="text-sm text-gray-400">DevOps</p>
        </div>
      </article>
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/90"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            Janet Doe
          </h3>
          <p className="text-sm text-gray-400">UX Designer</p>
        </div>
      </article>
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/100"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            Ami Doe
          </h3>
          <p className="text-sm text-gray-400">Product Manager</p>
        </div>
      </article>
      <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
        <div className="w-1/4">
          <img
            loading="lazy"
            className="rounded-full w-full"
            src="https://i.pravatar.cc/72"
            alt="avatar"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center pl-3">
          <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
            Ian Doe
          </h3>
          <p className="text-sm text-gray-400">QA Engineer</p>
        </div>
      </article>
    </div>
  </section>
);
