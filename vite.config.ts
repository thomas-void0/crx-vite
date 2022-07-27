import { ConfigEnv, UserConfig, loadEnv } from 'vite';

import WindiCSS from 'vite-plugin-windicss';
import { crx } from '@crxjs/vite-plugin';
import legacy from '@vitejs/plugin-legacy';
import manifest from './manifest.json';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
	const isBuild = command === 'build';
	const root = process.cwd();
	const env = loadEnv(mode, root);

	const { VITE_PUBLIC_PATH, VITE_NODE_ENV } = env;

	const _plugins = [
		react(),
		svgrPlugin({
			svgrOptions: { icon: true }
		}),
		WindiCSS(),
		crx({ manifest })
	];

	if (isBuild) {
		_plugins.push(legacy({ modernPolyfills: true }));
	}

	return {
		root,
		base: VITE_PUBLIC_PATH,
		envPrefix: 'VITE_',
		resolve: {
			alias: [
				{ find: '@', replacement: path.resolve(__dirname, './src') },
				{
					find: /^~/,
					replacement: `${path.resolve(__dirname, './node_modules')}/`
				}
			]
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true
				}
			}
		},
		plugins: _plugins,
		build: {
			target: 'es2015',
			chunkSizeWarningLimit: 2000,
			sourcemap: VITE_NODE_ENV === 'development',
			minify: VITE_NODE_ENV === 'production' ? 'esbuild' : false
		}
	};
};
