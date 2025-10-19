// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import { defineConfig } from 'eslint/config';
// import eslintPluginPrettier from 'eslint-plugin-prettier';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//     languageOptions: { globals: globals.browser },
//   },
//   tseslint.configs.recommended,
//   eslintPluginPrettier,
// ]);

// @ts-check

import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    name: 'tanstack/temp',
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'no-self-assign': 'off',
    },
  },
  {
    name: 'sql668/ignores',
    ignores: [".cz-config.js"],
  },
]