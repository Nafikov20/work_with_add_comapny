module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
  ],
  "ignorePatterns": ["dist"],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "import",
    "dirs",
    "react-hooks",
    "react-refresh",
    "sort-keys-fix",
    "simple-import-sort",
    "typescript-sort-keys"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // eslint-plugin-react
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "ignoreCase": true,
        "shorthandFirst": true,
        "reservedFirst": true,
        "multiline": "last"
      }
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/display-name": "off",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".tsx", ".jsx"]
      }
    ],
    // eslint
    "no-console": "off",
    "arrow-body-style": ["error", "as-needed"],
    // eslint-plugin-react-refresh
    "react-refresh/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ],
    // eslint-plugin-import
    "import/no-unresolved": "off",
    // eslint-plugin-sort-keys-fix
    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      {
        "natural": true
      }
    ],
    // eslint-plugin-dirs
    "dirs/dirnames": [
      1,
      {
        "pattern": "^[a-z][a-zA-Z0-9]*$"
      }
    ],
    // typescript
    "typescript-sort-keys/interface": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "natural": false,
        "requiredFirst": true
      }
    ],
    "typescript-sort-keys/string-enum": [
      "error",
      "asc",
      {
        "caseSensitive": true
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
    // eslint-plugin-simple-import-sort
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^(react)(\\/.*|$)", "^(react-dom)(\\/.*|$)"],
          ["^@?\\w"],
          [
            "^(~)(\\/.*|$)",
            "^(~/pages)(\\/.*|$)",
            "^(~/layouts)(\\/.*|$)",
            "^(~/containers)(\\/.*|$)",
            "^(~/components)(\\/.*|$)",
            "^(~/ui)(\\/.*|$)"
          ],
          [
            "^(~/api)(\\/.*|$)",
            "^(~/hooks)(\\/.*|$)",
            "^(~/store)(\\/.*|$)",
            "^(~/helpers)(\\/.*|$)",
            "^(~/types)(\\/.*|$)",
            "^(~/constants)(\\/.*|$)"
          ],
          ["^\\."],
          ["(jpe?g|png|webp|svg|avif)$"],
          ["(css)$"]
        ]
      }
    ],
    "simple-import-sort/exports": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
