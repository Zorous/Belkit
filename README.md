# Belkit

**Belkit** is a modern monorepo boilerplate designed to help you **launch your own reusable React component libraries** with ease. Whether you're building a design system or a set of utility packages, Belkit provides a scalable foundation with **pnpm workspaces**, **TypeScript**, **Tsup**, **Turborepo**, and **Storybook**.

Use Belkit as your starting point for rapidly building, documenting, and publishing your own open-source (or private) packages — all under your namespace.

---

## ✨ Features

- 🧱 Monorepo structure powered by `pnpm workspaces` & `Turborepo`
- ⚡️ Zero-config bundling with `tsup`
- 🧪 Built-in `Vitest` support for unit testing
- 📦 Publishing-ready packages under your own scope (`@your-scope/your-package`)
- 📚 Docs with `Next.js` + `Storybook`
- 🔥 Easily replace `shadcn/ui` or `tailwind` with your own design system

---
This guide explains how to:

- Resolve "Cannot find module 'react'" errors.
- Configure TypeScript properly.
- Share dependencies like `react` across all packages using `pnpm` workspaces.

---

## 📁 Folder Structure (Simplified)

```

your-monorepo/
├── apps/
│   └── docs/
├── packages/
│   └── image/
│       ├── index.tsx
│       └── package.json
├── tsconfig.json
└── pnpm-workspace.yaml

````

---

## ✅ Step-by-Step Setup

### 1. Configure `pnpm-workspace.yaml`

Create a file called `pnpm-workspace.yaml` at the root of your monorepo:

```yaml
packages:
  - "apps/*"
  - "packages/*"
````

---

### 2. Install React Globally at the Workspace Level

Run the following **in the root** of your monorepo:

```bash
pnpm add react react-dom -w
pnpm add -D @types/react @types/react-dom -w
```

This installs `react` and its type declarations at the workspace level, making them available to all packages.

---

### 3. Add `peerDependencies` to Your Package

In `packages/image/package.json`, define `react` and `react-dom` as peer dependencies:

```json
{
  "name": "@belkit/image",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

This tells consumers of the package to provide their own React.

---

### 4. Set Up TypeScript

#### At the Monorepo Root (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": ["./node_modules/@types"]
  },
  "exclude": ["node_modules", "dist"]
}
```

#### In the Package (`packages/image/tsconfig.json`)

```json
{
  "extends": "../../tsconfig.json",
  "include": ["./**/*.ts", "./**/*.tsx"]
}
```

---

### 5. Link Your Package Locally

If you're trying to consume `@belkit/image` in another app like `apps/docs`, make sure it's linked locally and recognized as a dependency.

In `apps/docs/package.json`:

```json
{
  "dependencies": {
    "@belkit/image": "workspace:*"
  }
}
```

Then install:

```bash
pnpm install
```

---

### 6. Verify React Is Recognized

If you still see TypeScript errors like:

```
Cannot find module 'react' or its corresponding type declarations.ts(2307)
```

Make sure:

* `react` and `@types/react` exist in the monorepo root `node_modules`.
* You are **not** trying to run the component package standalone (i.e., without a host app).
* Your IDE (e.g. VSCode) has correctly picked up the root `tsconfig.json`.

---

## 🛠 Build Tools (Optional)

If using `tsup` or similar:

### Install it:

```bash
pnpm add -D tsup
```

### Add build script in `packages/image/package.json`:

```json
"scripts": {
  "build": "tsup index.tsx --format esm,cjs --dts"
}
```

---

## 🧪 Test Locally

From the root of your monorepo:

```bash
pnpm install
pnpm build -r
```

Then try importing `@belkit/image` into your app.

---

## 💡 Troubleshooting

### React still not found?

* Make sure you've **not** installed `react` directly inside `packages/image/node_modules`.
* Re-run `pnpm install` after editing dependencies.
* Restart your IDE.

---

## 📌 Tips

* Use `workspace:*` in consumers (`apps/docs`) to reference local packages.
* Avoid placing `react` in `dependencies` inside shared packages to prevent version conflicts.

---


