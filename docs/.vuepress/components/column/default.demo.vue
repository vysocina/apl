<template>
	<div class="code-snippet column-default-demo">
		<v-row variant="flex">
			<v-column
				:large="6"
				:tablet="10"
				:phone="12"
			>
				<span>col</span>
			</v-column>

			<v-column
				:large="6"
				:tablet="10"
				:phone="12"
			>
				<span>col</span>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'ColumnDefaultDemo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.column-default-demo {
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
