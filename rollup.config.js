//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/index.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/test.js',
	  format: 'es',
	}
  };