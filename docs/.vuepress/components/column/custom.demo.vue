<template>
	<div class="code-snippet column-custom-demo">
		<v-row variant="flex">
			<v-column
				:large="12"
				:breakpoints="[{
					down: 1400,
					classes: ['custom', 'interesting']
				}]"
			>
				<span>col</span>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'ColumnCustomDemo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.column-custom-demo {
		.column {
			background: $cWhite;
			color: $cGreen;

			span {
				display: block;
				padding: 1.25rem 1.5rem;
				border: 1px solid $cGreen;
				margin: -1px;
			}

			&--custom {
				background: $cGreen;
			}

			&--interesting {
				color: $cWhite;
			}
		}
	}
</style>
