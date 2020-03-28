<template>
	<v-row variant="flex">
		<v-column
			:large="12"
			:breakpoints="[{
				up: 768,
				down: 1024,
				classes: ['custom-modifier', 'another-modifier']
			}]"
		>col</v-column>
	</v-row>
</template>

<script lang="ts">
	import {Component, Vue, Row, Column} from '@/index';

	@Component({
		components: {
			'v-row': Row,
			'v-column': Column,
		},
	})
	export default class App extends Vue {
	}
</script>

<style lang="scss">
	.row {
		background: red;
		padding-top: 20px;
	}

	.column {
		background: blue;

		&:nth-child(odd) {
			background: green;
		}
	}
</style>
