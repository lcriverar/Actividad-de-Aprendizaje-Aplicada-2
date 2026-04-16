import adapter from '@sveltejs/adapter-static'; // <--- Cambiado de 'auto' a 'static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Esto genera archivos .html en lugar de necesitar un servidor
			fallback: '404.html' 
		}),
		paths: {
			// REEMPLAZA 'prueba-actividad-2' si tu repo tiene otro nombre
			base: process.env.NODE_ENV === 'production' ? '/prueba-actividad-2' : '',
		}
	}
};

export default config;