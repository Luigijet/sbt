import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "unused-imports": unusedImports,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    rules: {
      /* React */
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      /* Hooks */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* Refresh */
      "react-refresh/only-export-components": "warn",

      /* Imports */
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      /* Unused */
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      /* Accessibility */
      "jsx-a11y/alt-text": "warn",

      /* Prettier */
      "prettier/prettier": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
