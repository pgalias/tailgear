import React, { FC, useState } from 'react';
import { getRandomEmployee, RandomSmallAvatar } from './utils';

const TeamMember: FC = () => {
  const [employee] = useState(getRandomEmployee());

  return (
    <article className="flex flex-wrap p-2 border-2 border-gray-200 dark:border-blue-200 rounded-lg">
      <div className="w-1/4">
        <RandomSmallAvatar className="rounded-full w-full" />
      </div>
      <div className="flex-grow flex flex-col justify-center pl-3">
        <h3 className="font-bold text-blueGray-900 dark:text-blue-100 m-0">
          {employee.name}
        </h3>
        <p className="text-sm text-gray-400">{employee.title}</p>
      </div>
    </article>
  );
};

export const MinimalisticCards: FC = () => (
  <section className="text-gray-800 dark:text-gray-50">
    <h2 className="text-3xl text-center mb-4">Our team</h2>
    <p className="text-center mb-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      consequatur culpa delectus dolor expedita explicabo facilis fuga fugiat
      incidunt ipsa numquam obcaecati quas saepe sequi similique sint velit,
      vero voluptas.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  </section>
);
