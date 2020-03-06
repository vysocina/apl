import {Vue} from 'vue-property-decorator';

import App from './App.vue';

const app = new Vue({
	components: {
		app: App,
	},
	render: (h) => h(App),
}).$mount('#app');

export default app;
