import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'alaska-contents',
  globalScript: './src/settings.initializer.ts',
  plugins: [
    builtins(),
    globals(),
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
