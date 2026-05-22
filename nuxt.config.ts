export default defineNuxtConfig({
	modules: ['@pinia/nuxt', '@nuxtjs/sitemap', 'proxima-vue/nuxt', '@nuxtjs/robots', '@nuxt/image'],

	// ssr: false,

	site: {
		url: process.env.NUXT_SITE_URL,
	},

	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/favicon/site.webmanifest' }
			],
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'theme-color', content: '#ffffff' }
			]
		}
	},

	sitemap: {
		includeAppSources: false,
		urls: [
			{ loc: '/', changefreq: 'daily', priority: 1.0 },
		],
	},

	robots: {
		groups: [
			{
				userAgents: ['*'],
				disallow: ['/admin', '/auth', '/profile'],
			},
		],
	},

	image: {
		format: ['webp', 'png', 'jpg', 'jpeg'],
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
		},
		domains: (process.env.NUXT_IMAGE_DOMAINS || '')
			.split(',')
			.map((d) => d.trim())
			.filter(Boolean),
	},

	runtimeConfig:
	{
		public:
		{
			api: process.env.NUXT_PUBLIC_API_HOST,
		}
	},

	nitro:
	{
		routeRules:
		{
			'/api/**':
			{
				proxy: `${(process.env.NUXT_PUBLIC_API_HOST || '').replace(/\/$/, '')}/api/**`
			}
		},
		devProxy:
		{
			'/api':
			{
				target: process.env.NUXT_PUBLIC_API_HOST,
				changeOrigin: true
			},
			'/storage':
			{
				target: process.env.NUXT_PUBLIC_API_HOST,
				changeOrigin: true
			},
		},
	},

	css: [ '@/assets/styles/index.scss' ],

	vite:
	{
		css:
		{
			preprocessorOptions:
			{
				scss:
				{
					additionalData: `@use "@/assets/styles/_setup.scss" as *;`,
				},
			},
		},
	},

	compatibilityDate: '2026-02-11',
})