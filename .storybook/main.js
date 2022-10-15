const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    name: '@storybook/react-vite',
    "options": {}
  },
   core: { builder: '@storybook/builder-vite' },
  features: {
    previewCsfV3: true,
    storyStoreV7: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
}