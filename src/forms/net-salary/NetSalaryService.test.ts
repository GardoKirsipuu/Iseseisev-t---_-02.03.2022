import React from 'react';
import {render, screen} from '@testing-library/react';
import {NetSalaryService} from './NetSalaryService';

test('renders learn react link', () => {
  const {calculate} = NetSalaryService();

  expect(calculate(600)).toBe(450);
  expect(calculate(650)).toBe(500);
  expect(calculate(1200)).toBe(1050);
  expect(calculate(1300)).toBe(1000);
  expect(calculate(2100)).toBe(1500);
  expect(calculate(3000)).toBe(2400);
  expect(calculate(1000)).toBe(850);
  expect(calculate(10000)).toBe(9400);
  expect(calculate(2200)).toBe(1600);
  expect(calculate(1800)).toBe(1500);
  expect(calculate(2000)).toBe(1700);
});
