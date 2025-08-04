
````md
## TypeScript Configuration for Tailwind CSS in Monorepo

To properly support Tailwind CSS v4 types (which use ESM modules) in a monorepo setup with TypeScript, you need to adjust the `moduleResolution` setting in your `tsconfig.json` files.

### 1. Root `tsconfig.json`

Set `moduleResolution` to `"nodenext"` (or `"node16"`) **with lowercase letters** to ensure TypeScript can correctly resolve ESM packages like Tailwind CSS.

```json
{
  "compilerOptions": {
    "moduleResolution": "nodenext",
    "module": "ESNext",
    "target": "ESNext",
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@belkit/*": ["packages/*/src"]
    },
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "composite": true
  },
  "include": ["packages", "global.d.ts"]
}
````

### 2. Package-specific `tsconfig.json` (e.g. `packages/tailwind-theme/tsconfig.json`)

Extend from the root config and **override** `moduleResolution` to `"nodenext"` as well to ensure Tailwind CSS types are found without errors.

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "moduleResolution": "nodenext",
    "isolatedModules": true,
    "resolveJsonModule": true,
    "allowJs": true,
    "types": ["node"],
    "composite": false
  },
  "include": ["tailwind.config.ts"]
}
```

---

### Why?

Tailwind CSS v4 exports ESM types which require TypeScript to use `"moduleResolution": "nodenext"` or `"node16"` to properly locate type declarations and `.mts` files. The default `"node"` resolution does not handle ESM well, causing errors like:

```
Cannot find module 'tailwindcss' or its corresponding type declarations.
There are types at ... but this result could not be resolved under your current 'moduleResolution' setting.
```

---

### How to test

Run the TypeScript compiler in noEmit mode to verify:

```bash
pnpm tsc --noEmit
```

If no errors appear, your config is working as expected.

---
