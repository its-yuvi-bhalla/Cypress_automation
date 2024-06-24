import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        beforeEach: "readonly",
        cy: "readonly",
        context: "readonly",
        Cypress: "readonly",
        it: "readonly",
        specify: "readonly",
        describe: "readonly",
        expect: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2], // Adjust the indent size as per your project's convention
    },
  },
];
