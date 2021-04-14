import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/processes/List';

test('examples/components/processes/List', () => {
  mockGql.usePagination({"processPagination": data.GQL_PROCESS_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});