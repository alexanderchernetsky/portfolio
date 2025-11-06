import localFont from 'next/font/local';

export const raleway = localFont({
	preload: true,
	variable: '--font-raleway',
	src: [
		{
			path: '../public/fonts/Raleway/raleway-v14-latin-300.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/Raleway/raleway-v14-latin-500.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Raleway/raleway-v14-latin-600.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/Raleway/raleway-v14-latin-700.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/Raleway/raleway-v14-latin-800.woff2',
			weight: '800',
			style: 'normal',
		},
	],
});
