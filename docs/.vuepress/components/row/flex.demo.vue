<template>
	<div class="code-snippet row-flex-demo">
		<v-row
			v-for="i in 12"
			variant="flex"
		>
			<template
				v-for="j in 12"
				v-if="i * j === 12"
			>
				<v-column
					v-for="k in j"
					:large="i"
				>
					<span>{{i}}.</span>
				</v-column>
			</template>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'RowFlexDemo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.row-flex-demo {
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
