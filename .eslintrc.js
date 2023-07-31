module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["import", "simple-import-sort"],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages: react -> next related -> others
          ["^react", "^next", "^next/\\w+", "^@?\\w"],
          // Internal packages
          ["^(pages|styles)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "sort-imports": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: true,
    },
  },
};
