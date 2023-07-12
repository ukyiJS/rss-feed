// @ts-check
const { builtinModules } = require('node:module');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  globals: {
    module: true,
    require: true,
    process: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'react-refresh',
    'import',
  ],
  rules: {
    eqeqeq: ['warn', 'always', { null: 'never' }],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-process-exit': 'off',
    'no-useless-escape': 'off',
    'no-new-object': 'error',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    'no-array-constructor': ['error'],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'prefer-rest-params': 'error',
    'default-param-last': 'error',
    'no-new-func': 'error',
    'no-tabs': 'error',
    'space-before-blocks': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
    'arrow-body-style': ['error', 'never'],
    'no-useless-constructor': 'error',
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],
    'space-infix-ops': 'off',
    'eol-last': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-lonely-if': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'block-spacing': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    'computed-property-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'linebreak-style': ['error', 'unix'],
    'brace-style': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: true,
      allowFunctionParams: true,
    }],
    semi: 'off',
    'semi-style': ['error', 'last'],
    'no-new-wrappers': 'error',
    'no-restricted-globals': 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: true,
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'newline-before-return': 'error',
    'function-paren-newline': ['error', 'multiline-arguments'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-tag-spacing': ['error', 'never'],
    'prefer-object-spread': 'error',
    'prefer-exponentiation-operator': 'error',
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'operator-assignment': ['error', 'always'],
    'one-var': ['error', 'never'],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['signature', 'method', 'constructor', 'field'] },
    ],
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/block-spacing': 'error',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/space-before-blocks': 'error',
    '@typescript-eslint/space-infix-ops': 'error',

    'import/no-nodejs-modules': [
      'error',
      { allow: builtinModules.map(mod => `node:${mod}`) },
    ],
    'import/no-duplicates': 'error',
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
});
