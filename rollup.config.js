import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

let buildObj = {
  entry: 'src/macy.js',
  format: 'umd',
  moduleName: 'Macy',
  banner: '/* Macy.js - v2.0.0 */',
  plugins: [
    babel()
  ],
  dest: 'dist/macy.js'
};

if (process.env.build !== 'dev') {
  buildObj.plugins.push(uglify());
}

export default buildObj;
