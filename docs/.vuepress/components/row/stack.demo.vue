<template>
	<div class="code-snippet row-stack-demo">
		<v-row variant="stack">
			<v-column v-for="i in 4" :key="`stack-demo-column-${i}`">
				<span>{{i}}.</span>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'RowStackDemo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.row-stack-demo {
		.column {
			background: $cWhite;
			color: $cGreen;

			span {
				display: block;
				padding: 1.25rem 1.5rem;
				border: 1px solid $cGreen;
				margin: -1px;
			}
		}
	}
</style>
