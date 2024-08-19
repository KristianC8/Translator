import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Configuración para evitar el uso de punto y coma
      'semi': ['error', 'never'],

      // Indentación de 2 espacios
      'indent': ['error', 2],

      // Comillas simples para cadenas de texto
      'quotes': ['error', 'single'],

      // Espacio antes del paréntesis de las funciones
      'space-before-function-paren': ['error', 'always'],

      // Prefiere el uso de const para variables que no cambian
      'prefer-const': 'error',

      // No permite el uso de var, solo let o const
      'no-var': 'error',

      // Elimina los espacios en blanco al final de las líneas
      'no-trailing-spaces': 'error',

      // Requiere una coma al final de objetos y arrays multilinea
      'comma-dangle': ['error', 'always-multiline'],

      // Asegura que haya una línea en blanco al final de cada archivo
      'eol-last': ['error', 'always'],

      // No permite múltiples declaraciones de variables en una sola línea
      'one-var': ['error', 'never'],

      // Requiere espacio alrededor de los operadores
      'space-infix-ops': 'error',

      // Muestra una advertencia si se usa console.log en el código
      'no-console': 'warn',

      // Requiere el uso de === y !== en lugar de == y !=
      'eqeqeq': ['error', 'always'],

      // No permite variables declaradas pero no usadas
      'no-unused-vars': 'error',

      // Prohíbe la reasignación de parámetros de funciones
      'no-param-reassign': 'error',

      // Limita la profundidad de anidamiento de funciones a 4 niveles
      'max-depth': ['error', 4],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
)
