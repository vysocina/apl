<template>
	<article class="markdown-body">
		<h1 id="api-mixin">ApiMixin</h1>

		<div class="highlight highlight-js">
			<pre>{{apiMixinExample}}</pre>
		</div>
	</article>
</template>

<script lang="ts">
	import {Component, Mixins} from 'vue-property-decorator';
	// * do not import helpers or components directly from
	//   their source file, use index instead - as the index
	//   reacts like package root
	import {ApiMixin} from '@/index';

	@Component({})
	export default class App extends Mixins(ApiMixin) {
		public apiMixinExample: string = `
import {Mixins} from 'vue-property-decorator';

import {ApiMixin} from '@apploud/core';

@Component({})
export default class MyComponent extends Mixins(ApiMixin) {
	async submit(): Promise<void> {
		if (!this.validateForm()) {
			return;
		}

		this.POST('/login', userData);
	}
}
		`;
	}
</script>
