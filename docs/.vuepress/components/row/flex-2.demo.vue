<template>
	<div class="code-snippet row-flex-2-demo">
		<v-row variant="flex">
			<v-column :large="6" :tablet="8" :phone="12">
				<span>...</span>
			</v-column>
			<v-column :large="6" :tablet="8" :phone="12">
				<span>...</span>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'RowFlex2Demo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.row-flex-2-demo {
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
