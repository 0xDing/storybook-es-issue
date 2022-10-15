# Reproduce `@storybook/store` Invalid ESM Issue

 The `dist/index.mjs` file in the `@storybook/store` package is not really a valid esm.

## To Reproduce

```bash
yarn install
yarn test
```

Result:
```bash
 RUN  v0.24.3 /Users/ding/Projects/storybook-esm-issue

 ❯ src/stories/v7.Buttton.stories.test.tsx (0)
 ✓ src/stories/v6.Buttton.stories.test.tsx (1)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/stories/v7.Buttton.stories.test.tsx [ src/stories/v7.Buttton.stories.test.tsx ]
Error: Cannot find module '/Users/ding/Projects/storybook-esm-issue/node_modules/lodash/mapValues' imported from /Users/ding/Projects/storybook-esm-issue/node_modules/@storybook/store/dist/index.mjs
Did you mean to import lodash/mapValues.js?


⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed | 1 passed (2)
     Tests  1 passed (1)
  Start at  01:18:25
  Duration  1.36s (transform 474ms, setup 0ms, collect 319ms, tests 38ms)
```

### Reproduce Description

Vitest is a vite based test runner that runs in ESM. And, I have written two unit test files:

* src/stories/v7.Buttton.stories.test.tsx - `import { composeStories } from '@storybook/react'`
* src/stories/v6.Buttton.stories.test.tsx - `import { composeStories } from '@storybook/testing-react'` (According to yarn.lock, @storybook/testing-react imports the 6.4.0 version of @storybook/react)

The v6 test case works fine, while v7 has a Cannot find module error.
This looks like an error caused by the index.mjs file in @storybook/store importing the cjs version of lodash in a way that doesn't conform to the esm specification