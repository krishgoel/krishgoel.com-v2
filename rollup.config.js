import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {config} from 'dotenv'
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sapperConfig from 'sapper/config/rollup.js';
import pkg from './package.json';

// To import local JSON files into Svelte files
import json from '@rollup/plugin-json'

// For accessing environment variables
const production = !process.env.ROLLUP_WATCH;

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: sapperConfig.client.input(),
		output: sapperConfig.client.output(),
		plugins: [
			// To import local JSON files into Svelte files
			json(),
			replace({
				// stringify the object       
				process: JSON.stringify({
					env: {
						isProd: production,
						...config().parsed // attached the .env config
					}
				}),
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: sapperConfig.server.input(),
		output: sapperConfig.server.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: sapperConfig.serviceworker.input(),
		output: sapperConfig.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
};
