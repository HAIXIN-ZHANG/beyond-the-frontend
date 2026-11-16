import { dirname } from 'node:path';

export default {
  plugins: {
    '@pandacss/dev/postcss': {
      // npm supplies the root package path even inside Next's PostCSS worker.
      cwd: process.env.npm_package_json ? dirname(process.env.npm_package_json) : process.cwd(),
      configPath: 'panda.config.ts',
    },
  },
};
