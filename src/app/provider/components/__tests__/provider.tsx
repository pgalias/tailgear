import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ComponentsProvider, useSelector } from '../provider';
import { selectSections } from '../selector';

describe('app::provider::components', () => {
  const TestComponent = () => {
    const sections = useSelector(selectSections);

    return (
      <>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>{section.title}</li>
          ))}
        </ul>
        <p title="sections count">{sections.length}</p>
      </>
    );
  };

  test('components context should return all sections', () => {
    render(
      <ComponentsProvider>
        <TestComponent />
      </ComponentsProvider>
    );

    const sections = screen.getAllByRole('listitem');
    const sectionsCount = parseInt(
      screen.getByTitle(/sections count/i).textContent as string,
      10
    );

    expect(sections).toHaveLength(sectionsCount);
  });

  test("useSelector hook should throw an error when it's called outside ComponentsProvider", () => {
    const { result } = renderHook(() => useSelector(selectSections));

    expect(result.error).toBeDefined();
  });
});
