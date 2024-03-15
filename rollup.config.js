import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
    },
    external: ['canvas'],
    plugins: [
      typescript({ declaration: true, declarationDir: 'dist/esm'})
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true
    },
    external: ['canvas'],
    plugins: [
      commonjs(),
      typescript({ declaration: true, declarationDir: 'dist/cjs' })
    ],
  },
];

