import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  // Add some tests (at least 2-3 tests per grade)
  expect(calculate(24, 30, 30)).toBe('failed');
  expect(calculate(30, 24, 30)).toBe('failed');
  expect(calculate(30, 30, 24)).toBe('failed');
  expect(calculate(25, 25, 25)).toBe('failed');

  expect(calculate(25, 25, 26)).toBe('satisfactory');
  expect(calculate(25, 25, 50)).toBe('satisfactory');

  expect(calculate(40, 30, 31)).toBe('good');
  expect(calculate(50, 50, 25)).toBe('good');

  expect(calculate(50, 50, 26)).toBe('very good');
  expect(calculate(50, 50, 50)).toBe('very good');
});
