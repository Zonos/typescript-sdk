import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

(() => {
  const source = readFileSync(
    path.resolve(`${path.dirname('')}/package.json`)
  ).toString('utf-8');
  const sourceObj = JSON.parse(source);

  // remove node 18 engines requirement (This is the requirement to use built-in fetch in test, and test is not being exported)
  delete sourceObj.engines;

  sourceObj.scripts = {};

  sourceObj.devDependencies = {};

  sourceObj.types = 'all.d.ts';

  writeFileSync(
    `./dist/package.json`,
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  );

  copyFileSync(
    path.resolve(`${path.dirname('')}/.npmignore`),
    path.resolve(`${path.dirname('')}/dist/.npmignore`)
  );
})();
