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
			},
			{
				title: 'Mixins',
				children: [
					['mixins/debug', 'DebugMixin'],
					['mixins/api', 'ApiMixin']
				]
			},
			{
				title: 'General Props',
				children: [
					['props/classes', 'Classes: HTMLClass']
				]
			}
		]
	}
};
