<template>
	<div class="code-snippet column-offset-demo">
		<v-row variant="flex">
			<v-column :large="6">
				<span>col</span>
			</v-column>

			<v-column :large="[1, 5]">
				<span>col</span>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'ColumnOffsetDemo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.column-offset-demo {
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
