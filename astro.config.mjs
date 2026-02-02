// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // 1. Pon tu dominio propio aquí abajo
    site: 'https://miamigoanhelado.com', 
    
    // 2. Como es dominio propio, el base debe ser una barra sola
    base: '/', 
    
    integrations: [mdx(), sitemap()],
});