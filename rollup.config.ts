import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: 'index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    'react',
    'styled-components',
    'react-spring',
    'next',
    'next/router',
    'react-intl'
  ],
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    json()
  ]
}