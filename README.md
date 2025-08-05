# Belkit

**Belkit** is a modern, scalable monorepo architecture for building and maintaining a reusable React UI component library and supporting utilities. It provides a robust and production-ready setup to design your own **design system**, **theme package**, and multiple **modular components**, all under a single workspace.

This repo is meant to be the **source of truth for the `@belkit/*` packages**, used across multiple apps or boilerplates (like [`belkit-boilerplate`](https://github.com/your-org/belkit/tree/belkit-boilerplate)).

---

## 🧠 What’s in This Monorepo?

Belkit includes:

- 🧱 Reusable UI components (`@belkit/button`, `@belkit/image`, etc.)
- 🎨 Shared Tailwind configuration (`@belkit/tailwind-theme`)
- ⚙️ Utility packages (optional future expansion)
- 📦 Build-ready packages powered by `tsup`
- 📚 Documentation-ready with `Storybook` or `Next.js`
- 🧪 Testable with `Vitest`

---

## 🔍 Why Use This?

This monorepo is designed to:

- Provide a **centralized UI library** (`@belkit/ui`, `@belkit/button`, etc.)
- Export a **central Tailwind config** you can reuse across apps
- Support **local development** using `pnpm` and `Turborepo`
- Enable easy publishing of scoped packages (`@belkit/*`)
- Be consumed by other projects like `belkit-boilerplate`

---

## 🗂 Folder Structure (Simplified)

```

belkit/
├── apps/
│   └── docs/            → (Optional Storybook or Next.js docs site)
├── packages/
│   ├── belkit/          → Core component exports
│   ├── button/          → Example standalone component
│   ├── tailwind-theme/  → Centralized Tailwind config
│   └── ...              → Additional utilities
├── tsconfig.json
├── pnpm-workspace.yaml
└── turbo.json

````

---

## 📦 Usage in External Projects

You can install and use any of these packages via `workspace:*` if you’re working in a larger monorepo, or publish them via npm for wider consumption.

Example:

```bash
pnpm add @belkit/button@workspace:* --filter=apps/web
````

Then import it:

```tsx
import { Button } from "@belkit/button";
```

You can also reuse the shared Tailwind config:

```ts
// tailwind.config.ts in your app
import tailwindThemeConfig from "@belkit/tailwind-theme/tailwind.config";

export default {
  ...tailwindThemeConfig,
  content: ["./src/**/*.{ts,tsx}"],
};
```

---

## 🧰 Tech Stack

* **Bundler**: [`tsup`](https://tsup.egoist.dev/)
* **Monorepo Manager**: `pnpm workspaces` + [`Turborepo`](https://turbo.build/repo)
* **Styling**: [`tailwindcss`](https://tailwindcss.com/)
* **UI Components**: Built on `React`, optionally using [`shadcn/ui`](https://ui.shadcn.dev/)
* **Testing**: [`Vitest`](https://vitest.dev/)
* **Docs**: [`Storybook`](https://storybook.js.org/) or `Next.js`

---

## 🧪 Developing Locally

1. **Install deps**:

```bash
pnpm install
```

2. **Build all packages**:

```bash
pnpm build -r
```

3. **Run storybook/docs if needed**:

```bash
pnpm dev --filter=apps/docs
```

---

## 📤 Publishing

Each package can be published to npm using `pnpm publish --filter @belkit/your-package`.

---

## 📚 For Boilerplate Users

If you're looking for a ready-to-use starter app with this setup (rather than the source of the component library), check out the [`belkit-boilerplate`](https://github.com/your-org/belkit/tree/belkit-boilerplate) branch instead.

---

## 🧩 Extend It

You can add:

* `@belkit/forms` – for form components
* `@belkit/theme` – for design tokens
* `@belkit/icons` – for icon system
* And more...

---

## 🧠 Tips

* Always use `workspace:*` to link local packages
* Don't install `react` in component packages; use `peerDependencies`
* Keep shared Tailwind configs in `@belkit/tailwind-theme`
* Use isolated `tsconfig.json` files per package extending from the root config

---

## License

MIT © Belkit