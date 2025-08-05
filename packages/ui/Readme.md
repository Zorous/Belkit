# @belkit/ui

A reusable UI component library for the **Belkit** design system, built with React and TailwindCSS.

## ✨ Features

- ⚛️ Built with React 19
- 🎨 Styled using Tailwind CSS
- 🧩 Composable and accessible components
- 🎯 Designed for use across Belkit projects

## 📦 Installation

```bash
npm install @belkit/ui
# or
yarn add @belkit/ui
````

## 🔧 Usage

```tsx
import { SmartImage } from '@belkit/ui';

function App() {
  return (
    <div>
      <SmartImage src="/logo.png" alt="Logo" />
    </div>
  );
}
```

> You may also need to import global styles if required:

```tsx
import '@belkit/ui/globals.css';
```

## 📁 Components

* `SmartImage`
* More coming soon...

## 🛠 Development

This package is part of the [Belkit](https://github.com/Zorous/belkit) monorepo.

```bash
# From the root of the monorepo:
pnpm dev   # or turbo dev
```

To build the package:

```bash
pnpm build
```

## 📝 License

MIT © [Zorous](https://github.com/Zorous)

