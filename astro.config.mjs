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
						{ label: 'SOlicitud de personal', slug: 'service/req' },  
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