import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'alaska-contents',
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
    // {
    //   type: 'angular',
    //   componentCorePackage: '@ionic/core',
    //   directivesProxyFile: '../angular/projects/alaska-contents/src/lib/directives/proxies.ts',
    //   directivesUtilsFile: '../angular/projects/alaska-contents/src/lib/directives/proxies-utils.ts',
    //   directivesArrayFile: '../angular/projects/alaska-contents/src/lib/directives/proxies-list.txt',
    //   excludeComponents: [],
    // }
  ]
};
