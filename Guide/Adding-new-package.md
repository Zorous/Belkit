Here’s a complete step-by-step **Markdown guide** for adding a new package to your monorepo using `pnpm` (especially in a setup like yours with `@belkit/*` packages and Tailwind configs):

---

# 📦 How to Add a New Package in a pnpm Monorepo (e.g. Tailwind Theme)

## 📁 1. Create a New Package Folder

```bash
mkdir -p packages/<your-package-name>
cd packages/<your-package-name>
```

For example:

```bash
mkdir -p packages/tailwind-theme
cd packages/tailwind-theme
```

---

## 📄 2. Initialize a `package.json`

```bash
pnpm init
```

You can also skip the prompts:

```bash
pnpm init -y
```

---

## ⚙️ 3. Add Required Dependencies

If your package needs dev tools (like Tailwind), use:

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

If it's a utility or shared logic package, use regular dependencies:

```bash
pnpm add lodash # example
```

---

## 🛠️ 4. Configure Entry Points (Optional but Recommended)

In `package.json`:

```jsonc
{
  "name": "@belkit/tailwind-theme",
  "version": "1.0.0",
  "exports": {
    "./tailwind.config": "./tailwind.config.ts"
  },
  "files": [
    "tailwind.config.ts"
  ]
}
```

Make sure the file you want to expose is listed in `"files"`.

---

## 💡 5. Create Your Config/Code

Example `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#123456"
      }
    }
  },
  plugins: []
}

export default config
```

---

## 🔗 6. Link the Package to the App

From the root of your monorepo, run:

```bash
pnpm add @belkit/tailwind-theme@workspace:* --filter=apps/web
```

✅ This tells the app (e.g. `apps/web`) to use the local version of your package.

---

## 🧪 7. Use It in Your App

In `apps/web/tailwind.config.ts`:

```ts
import tailwindThemeConfig from "@belkit/tailwind-theme/tailwind.config"

export default {
  ...tailwindThemeConfig,
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}" // etc.
  ]
}
```

---

## 🧼 8. Optional: Clean, Build, and Format

To clean and rebuild everything:

```bash
pnpm install
pnpm build --filter=...
```

Use Prettier:

```bash
pnpm prettier --write .
```

---

## 🧠 Tips

* Always keep your package names in sync with the `@belkit/*` convention.
* Use `"main"` and `"exports"` in `package.json` to control how your code is imported.
* Tailwind config files should be `.ts` and exported as `default`.
* Don’t forget to include exposed files in `"files"` array.

---

Let me know if you want a template folder structure to reuse next time.
