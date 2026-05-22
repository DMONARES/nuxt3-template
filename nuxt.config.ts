const publicRouteRules = process.env.NODE_ENV === 'production'
	? {
		'/': { swr: 300 },
		'/section/**': { swr: 300 },
		'/project/**': { swr: 300 },
		'/plug': { swr: 300 },
	}
	: {};

export default defineNuxtConfig({
	modules: ['@pinia/nuxt', '@nuxtjs/sitemap', 'proxima-vue/nuxt', '@nuxtjs/robots', '@nuxt/image'],

	site: {
		url: 'https://atomnews.ru',
	},

	// ssr: false,

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
				{ name: 'yandex-verification', content: '9e9c6fce3083fa0d' },
				{ name: 'theme-color', content: '#ffffff' }
			]
		}
	},

	sitemap: {
	includeAppSources: false,
	urls: [
		{
			loc: '/',
			changefreq: 'daily',
			priority: 1.0,
		},
	],
	},

	robots: {
		sitemap: 'https://atomnews.ru/sitemap.xml',
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
			.map((domain) => domain.trim())
			.filter(Boolean)
			.concat('atomnews.ru'),
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
			...publicRouteRules,

			// Proxy API to avoid browser CORS (works when Nitro server is running)
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