# @arckit/storybook

Storybook decorators and utilities for i18n-enabled component stories.

[![npm version](https://img.shields.io/npm/v/@arckit/storybook)](https://www.npmjs.com/package/@arckit/storybook)
[![npm downloads](https://img.shields.io/npm/dm/@arckit/storybook)](https://www.npmjs.com/package/@arckit/storybook)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arckit/storybook)](https://bundlephobia.com/package/@arckit/storybook)
[![codecov](https://codecov.io/gh/arckit-dev/storybook/graph/badge.svg)](https://codecov.io/gh/arckit-dev/storybook)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 📑 Table of Contents

- 🪧 [About](#about)
- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 📖 [API](#api)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)

<h2 id="about">🪧 About</h2>

Provides a `translation` helper and a `withI18nProvider` Storybook decorator for rendering stories with i18n support. Built on [@arckit/i18n](https://www.npmjs.com/package/@arckit/i18n) and [i18next](https://www.i18next.com/).

<h2 id="installation">📦 Installation</h2>

```bash
pnpm add -D @arckit/storybook
```

<h2 id="usage">🚀 Usage</h2>

### Decorator for stories

```typescript
import { withI18nProvider } from '@arckit/storybook';
import translations from '@public/locales/en-US/my-namespace.json';

const meta = {
  decorators: [withI18nProvider('en-US', { 'my-namespace': translations })]
};
```

### Translation helper for tests

```typescript
import { translation } from '@arckit/storybook';

const t = translation('en-US', { 'my-namespace': translations });
```

<h2 id="api">📖 API</h2>

| Export | Description |
|--------|-------------|
| `translation(lng, resources)` | Creates a typed translation function from locale resources. Returns a `t` function. |
| `withI18nProvider(lng, resources)` | Storybook decorator that wraps a story with `I18nProvider` and provides the translation function via injection. |

<h2 id="contributing">🤗 Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">📝 License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
