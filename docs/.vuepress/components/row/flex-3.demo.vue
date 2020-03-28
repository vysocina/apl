<template>
	<div class="code-snippet row-flex-3-demo">
		<v-row variant="flex">
			<v-column :large="12">
				<v-row variant="flex">
					<v-column :large="5">
						<span>1.</span>
					</v-column>
					<v-column :large="7">
						<span>2.</span>

						<v-row>
							<v-column :large="10">
								<span>3.</span>
							</v-column>
							<v-column :large="2">
								<span>4.</span>
							</v-column>
						</v-row>
					</v-column>
				</v-row>
			</v-column>
		</v-row>
	</div>
</template>

<script>
	import {Column, Row} from '../../../../dist/apploud.core.common.js';

	export default {
		name: 'RowFlex3Demo',
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	};
</script>

<style lang="scss">
	@import '../_core';

	.row-flex-3-demo {
		.column {
			background: $cWhite;
			color: $cGreen;

			span {
				display: block;
				padding: 1.25rem 1.5rem;
				border: 1px solid $cGreen;
				margin: -1px;
			}

			> .row > .column > .row .column span {
				margin-top: 0;
			}
		}
	}
</style>
