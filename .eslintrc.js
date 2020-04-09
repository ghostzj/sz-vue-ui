module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "semi": 0,
    "space-before-function-paren": ["error", "never"],
    "vue/no-side-effects-in-computed-properties": 0,
    "vue/return-in-computed-property": 0,
    "no-mixed-operators": 0,
    "vue/valid-v-model": 0,
    "no-extra-parens": 0,
    "no-unused-expressions": 0,
    "standard/no-callback-literal": 0,
    "no-useless-call": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
