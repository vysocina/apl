module.exports = {
	title: '@apploud/core',
	description: 'VueJS & Typescript Component system',
	themeConfig: {
		smoothScroll: true,
		logo: '/assets/logo.svg',
		sidebar: [
			{
				title: 'About Package',
				path: '/',
				children: [
					['/', 'Introduction'],
					['/contribution', 'Contribution']
				],
				collapsable: false
			},
			{
				title: 'Layout Components',
				children: [
					['layout/row', 'Row'],
					['layout/column', 'Column']
				]
			}
		]
	}
};
