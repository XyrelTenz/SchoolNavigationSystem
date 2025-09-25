import { defineConfig } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat';
module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    plugins: {
      import: require('eslint-plugin-import'),
    },
    rules: {
      'react/display-name': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
]);
