<template>
	<div :class="classList">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import {Component, Vue, Prop} from '@/index';
	import {RowAlignment, RowVariant} from '@/components/layout/RowTypes';

	type HTMLClass = string | string[] | { [key: string]: boolean };

	@Component({})
	export default class Row extends Vue {
		@Prop({required: false, default: null}) public readonly classes: HTMLClass | undefined;

		@Prop({required: false, default: RowVariant.FLEX}) public readonly variant: RowVariant | undefined;
		@Prop({required: false, default: null}) public readonly vertical: RowAlignment | undefined;
		@Prop({required: false, default: null}) public readonly horizontal: RowAlignment | undefined;

		private classPrefix: string = 'row';

		get classList(): Array<string | null> {
			const classes = [this.classPrefix];

			classes.push(this.prefixClass(this.variant as string));

			if (this.vertical !== null) {
				classes.push(this.prefixClass(`vertical-${this.vertical}`));
			}

			if (this.horizontal !== null) {
				classes.push(this.prefixClass(`horizontal-${this.horizontal}`));
			}

			if (this.classes === null) {
				return classes;
			}

			if (typeof this.classes === 'string') {
				classes.push(this.classes);
			}

			if (typeof this.classes === 'object' && Array.isArray(this.classes)) {
				this.classes.forEach((classModifier) => {
					if (classModifier) {
						classes.push(this.prefixClass(classModifier));
					}
				});
			}

			if (typeof this.classes === 'object' && typeof this.classes.length === 'undefined') {
				Object.keys(this.classes).forEach((classModifier: string) => {
					if ((this.classes as { [key: string]: boolean })[classModifier]) {
						classes.push(this.prefixClass(classModifier));
					}
				});
			}

			return classes;
		}

		public prefixClass(classModifier: string): string {
			return `${this.classPrefix}--${classModifier}`;
		}
	}
</script>

<style lang="scss">
	@import '@/scss/components/layout/Row';
</style>
