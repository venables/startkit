const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
  ],
  env: {
    node: true,
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    },
    tailwindcss: {
      callees: ["className", "clsx", "cls", "cva", "cn"]
    }
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/"
  ],
  overrides: [
    /**
     * Config files
     */
    {
      files: ["*.config.{js,ts}"],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-default-export": "off"
      }
    },
    /**
     * Test Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      extends: [require.resolve("@vercel/style-guide/eslint/vitest")],
      rules: {
        /**
         * Allow non-null assertions in tests
         */
        "@typescript-eslint/no-non-null-assertion": "off",
        /**
         * Don't require description for disabling eslint here
         */
        "eslint-comments/require-description": "off"
      }
    },
    /**
     * Next.js configuration / exports
     */
    {
      files: [
        "app/**/page.tsx",
        "app/**/layout.tsx",
        "app/**/loading.tsx",
        "app/**/not-found.tsx",
        "app/**/*error.tsx",
        "app/sitemap.ts",
        "app/robots.ts",
        "app/manifest.ts"
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }]
      }
    },
    /**
     * JSX/TSX specific config
     */
    {
      files: ["**/*.{jsx,tsx}"],
      rules: {
        "no-nested-ternary": "off"
      }
    }
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "separate-type-imports" }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      {
        allowBoolean: true,
        allowNumber: true
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external", "internal"],
          ["sibling", "parent"],
          "index",
          "object"
          // "type"
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"]
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true
      }
    ],
    "tailwindcss/no-custom-classname": [
      "error",
      {
        cssFiles: ["app/globals.css"]
      }
    ]
  }
}
