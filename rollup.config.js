import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'app-tools',
      sourcemap: false,
    },
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    }
  ],
  plugins: [
    typescript({
      declarationDir: 'dist',
      tsconfig: 'tsconfig.json',
    }),
    babel({
      extensions: ['.js', '.ts'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
    }),
  ],
}
