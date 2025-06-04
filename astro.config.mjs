// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introducción',
					items: [
					
						{ label: 'Introducción', slug: 'intro/introduccion' },
					],
					
          //Reclutamiento
				},

				{
					label: 'Reclutamiento',
					items: [
						{ label: 'Introduccion', slug: 'service/intro' }, 
						{ label: 'Inicio de Sesión', slug: 'service/req' },  
						{ label: 'Solicitud de personal', slug: 'service/inicio' }, 
						{ label: 'Evaluacion Inteligente', slug: 'service/cv' }, 
					],
				},
        			


				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
//