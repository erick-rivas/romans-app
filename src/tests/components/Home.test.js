import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Home from "components/Home";

test('Home', () => {
  render(<Home />);
  expect(screen).toBeDefined();
});