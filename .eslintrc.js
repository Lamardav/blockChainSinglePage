module.exports = {

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2018,
                sourceType: "module"
            },
            plugins: [
                "@typescript-eslint"
            ],

            rules: {
                "@typescript-eslint/no-array-constructor": "warn",
                "no-array-constructor": "off",
                "no-undef": "off",
                "react/display-name": "off"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "import"
    ],
    root: true,
    rules: {
        "comma-dangle": [
            "warn",
            "never"
        ],
        "eol-last": "error",
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc"
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal"
                ]
            }
        ],
        indent: [
            "error",
            4
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "max-len": [
            "warn",
            {
                code: 120
            }
        ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash"
                    },
                    {
                        message: "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es/chain"
                    },
                    {
                        importNames: ["chain"],
                        message: "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es"
                    },
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash-es"
                    }
                ],
                patterns: [
                    "lodash/**",
                    "lodash/fp/**"
                ]
            }
        ],
        "no-unused-vars": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        quotes: [
            "warn",
            "double"
        ],
        "react/jsx-curly-spacing": [
            "warn",
            {
                allowMultiline: true,
                children: {
                    when: "always"
                },
                spacing: {
                    objectLiterals: "always"
                },
                when: "always"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions:
          true
            }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/prop-types": "warn",
        semi: "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }

};
