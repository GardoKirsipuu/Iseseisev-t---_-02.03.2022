import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(18, 0)).toBe(22);
  expect(calculate(62, 30)).toBe(30);
  expect(calculate(46, 15)).toBe(24);
  expect(calculate(35, 15)).toBe(24);
  expect(calculate(65, 15)).toBe(27);
  expect(calculate(45, 30)).toBe(27);
  expect(calculate(46, 5)).toBe(24);
  expect(calculate(30, 15)).toBe(24);
  expect(calculate(20, 2)).toBe(22);
  expect(calculate(45, 15)).toBe(24);
});
