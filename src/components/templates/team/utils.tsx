import React, { FC } from 'react';

export const AVATAR_URL = 'https://i.pravatar.cc/';
export const RandomSmallAvatar: FC<{ className: string }> = ({ className }) => (
  <img
    loading="lazy"
    src={`${AVATAR_URL}${Math.floor(Math.random() * (90 - 65 + 1)) + 65}`}
    alt="avatar"
    className={className}
  />
);
export const RandomMediumAvatar: FC<{ className: string }> = ({
  className,
}) => (
  <img
    loading="lazy"
    src={`${AVATAR_URL}${Math.floor(Math.random() * (265 - 245 + 1)) + 245}`}
    alt="avatar"
    className={className}
  />
);
export const RandomMediumLargeAvatar: FC<{ className: string }> = ({
  className,
}) => (
  <img
    loading="lazy"
    src={`${AVATAR_URL}${Math.floor(Math.random() * (768 - 755 + 1)) + 755}`}
    alt="avatar"
    className={className}
  />
);

export const EMPLOYEES = [
  { name: 'John Doe', title: 'CEO' },
  { name: 'Jane Doe', title: 'CTO' },
  { name: 'Irene Hutchinson', title: 'CCO' },
  { name: 'Fabiola Freeman', title: 'UX/UI Designer' },
  { name: 'Joel Gallien', title: 'Senior Backend Developer' },
  { name: 'Gloria Saladin', title: 'Frontend Tech Lead' },
  { name: 'Keith M. Melvin', title: 'Project Manager' },
  { name: 'Eve Lester', title: 'Junior Frontend Developer' },
  { name: 'Brian Moore', title: 'HR Specialist' },
  { name: 'Genevieve Pease', title: 'Customer Success Specialist' },
];
export const getRandomEmployee = (): typeof EMPLOYEES[0] =>
  EMPLOYEES[Math.floor(Math.random() * EMPLOYEES.length)];
