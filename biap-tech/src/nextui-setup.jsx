// nextui-setup.js
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

export function NextUISetup({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}