import {Vue} from 'vue-property-decorator';
import VueRouter from 'vue-router';

import Dev from './dev.vue';

Vue.use(VueRouter);

const app = new Vue({
	render: (h) => h(Dev),
}).$mount('#app');

export default app;
