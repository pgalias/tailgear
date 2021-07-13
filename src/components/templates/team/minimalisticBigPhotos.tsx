import React, { FC } from 'react';

export const MinimalisticBigPhotos: FC = () => (
  <section className="text-gray-800 dark:text-gray-50 text-center">
    <h2 className="text-3xl mb-4">Out team</h2>
    <p className="mb-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque
      aut cum dolor eaque est, fugit harum minima pariatur perferendis quas,
      quasi quia quo rem saepe sint tempora voluptatem voluptatibus.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/256"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/257"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/254"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/255"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/260"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
      <article className="mb-4">
        <img
          loading="lazy"
          className="w-full"
          src="https://i.pravatar.cc/250"
          alt="avatar"
        />
        <div className="flex flex-col justify-center bg-cyan-700 dark:bg-warmGray-100 w-4/5 p-3 relative z-10 mx-auto -mt-10">
          <h3 className="font-bold text-blue-100 dark:text-blueGray-900 m-0">
            John Doe
          </h3>
          <p className="text-sm text-gray-400">CTO</p>
        </div>
      </article>
    </div>
  </section>
);
