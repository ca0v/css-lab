import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()],
	base: '/css-lab',
	build: {
		sourcemap: true
	},
	server: {
		port: 5173,
		strictPort: true
	}
});
