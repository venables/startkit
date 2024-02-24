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
  // parser: "@typescript-eslint/parser",
  // plugins: ["@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true
  },
  overrides: [
    /**
     * Config files (ex: jest.config.js, prettier.config.js, tailwind.config.js)
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
     * Jest Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      env: {
        jest: true
      },
      extends: [
        require.resolve("@vercel/style-guide/eslint/jest"),
        "plugin:jest/style"
      ],
      plugins: ["jest"],
      rules: {
        /**
         * Allow non-null assertions in tests
         */
        "@typescript-eslint/no-non-null-assertion": "off",
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
  settings: {
    tailwindcss: {
      callees: ["className", "clsx", "cls", "cva", "cn"]
    }
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" }
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
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc"
        }
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
