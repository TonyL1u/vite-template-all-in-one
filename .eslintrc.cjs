module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended', 'prettier'],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.cjs', 'tailwind.config.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: ['./tsconfig.json', './tsconfig.node.json'], tsconfigRootDir: __dirname },
    plugins: ['react-refresh', 'simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
        'no-console': 'error'
    }
};
