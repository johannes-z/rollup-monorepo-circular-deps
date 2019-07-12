import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const baseConfig = {
  input: './src/main.ts',
  output: {
    name: 'test',
    file: 'dist/lib.js',
    format: 'umd',
    globals: {
      '@pnp/common': 'pnp.common',
      '@pnp/sp': 'pnp.sp',
    },
    sourcemap: true,
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    resolve({
      main: false,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      runtimeHelpers: true,
      sourceMap: true,
    }),
  ],
}

const config = Object.assign({}, baseConfig)
module.exports = config
