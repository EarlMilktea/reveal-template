import js from "@eslint/js";
import { importX } from "eslint-plugin-import-x";
import jsxAlly from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
  },
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  js.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  tseslint.configs.strictTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended(),
  unicorn.configs.recommended,
  jsxAlly.flatConfigs.recommended,
  // @ts-expect-error - broken stubs
  importX.flatConfigs.recommended,
  // @ts-expect-error - broken stubs
  importX.flatConfigs.typescript,
  {
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowBoolean: true,
          allowNumber: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
