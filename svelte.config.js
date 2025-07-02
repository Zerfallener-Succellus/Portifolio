import adapter from '@sveltejs/adapter-static'; // MUDANÇA IMPORTANTE AQUI
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // MUDANÇA IMPORTANTE AQUI
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),

        paths: {
            // ATENÇÃO: Verifique se o nome do seu repositório está correto aqui!
            base: process.env.NODE_ENV === 'production' ? '/Portifolio' : '',
        }
    }
};

export default config;