import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/users/FormSave';

test('examples/components/users/FormSave', () => {
  mockGql.useSave({"saveUser": data.GQL_USER});
  render(<FormSave />);
  expect(screen).toBeDefined();
});