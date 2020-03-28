<template>
	<div :class="classList">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

type HTMLClass = string[] | string | { [key: string]: boolean };

interface Breakpoint {
	up?: number;
	down?: number;
	classes?: HTMLClass;
}

@Component({})
export default class Column extends Vue {

	get classList(): Array<string | null> {
		let classes = [this.classPrefix];

		this.breakpointClasses.forEach((classModifier) => {
			classes.push(classModifier);
		});

		if (typeof this.breakpoints === 'object' && Array.isArray(this.breakpoints)) {
			this.breakpoints.forEach((breakpoint: Breakpoint) => {
				const {up, down} = breakpoint;
				let canRender = false;

				if (typeof up !== 'undefined' && typeof down === 'undefined') {
					if (this.width > up) {
						canRender = true;
					}
				}

				if (typeof down !== 'undefined' && typeof up === 'undefined') {
					if (this.width < down) {
						canRender = true;
					}
				}

				if (typeof up !== 'undefined' && typeof down !== 'undefined') {
					if (this.width > up && this.width < down) {
						canRender = true;
					}
				}

				if (!canRender) {
					return;
				}

				classes = this.processClasses(breakpoint.classes, classes);
			});
		}

		classes = this.processClasses(classes);

		return classes.map((c: string, i: number) => i > 0 ? this.prefixClass(c) : c);
	}

	get breakpointClasses(): string[] {
		let classes: string[] = [];

		['tiny', 'phone', 'small', 'tablet', 'desktop', 'medium', 'large'].forEach((breakpointName) => {
			// @ts-ignore
			classes = this.processBreakpoint(this[breakpointName], breakpointName, classes);
		});

		return classes;
	}
	@Prop({required: false, default: null}) public readonly classes: HTMLClass | undefined;

	@Prop({required: false, default: null}) public readonly large: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly medium: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly desktop: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly tablet: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly small: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly phone: number[] | number | undefined;
	@Prop({required: false, default: null}) public readonly tiny: number[] | number | undefined;

	@Prop({required: false, default: null}) public readonly breakpoints: Breakpoint[] | undefined;

	private classPrefix: string = 'column';
	private width: number = 0;

	public prefixClass(classModifier: string): string {
		return `${this.classPrefix}--${classModifier}`;
	}

	public processClasses(input: HTMLClass | undefined, classes: string[] = []) {
		if (typeof input === 'undefined') {
			return classes;
		}

		if (typeof input === 'string') {
			classes.push(input);
		}

		if (typeof input === 'object' && Array.isArray(input)) {
			input.forEach((classModifier) => {
				if (classModifier) {
					classes.push(classModifier);
				}
			});
		}

		if (typeof input === 'object' && typeof input.length === 'undefined') {
			Object.keys(input).forEach((classModifier: string) => {
				if ((input as { [key: string]: boolean })[classModifier]) {
					classes.push(classModifier);
				}
			});
		}

		return classes;
	}

	public processBreakpoint(
		breakpoint: number[] | number | undefined,
		breakpointName: string,
		classes: string[],
	): string[] {
		if (breakpoint !== null) {
			if (typeof breakpoint === 'number') {
				classes.push(`${breakpointName}-${breakpoint}`);
			}

			if (typeof breakpoint === 'object' && Array.isArray(breakpoint)) {
				const [offset, columns] = breakpoint;

				classes.push(`${breakpointName}-${columns}`);
				classes.push(`${breakpointName}-offset-${offset}`);
			}
		}

		return classes;
	}

	private mounted(): void {
		if (typeof window === 'undefined') {
			return;
		}

		window.addEventListener('resize', () => {
			this.width = window.innerWidth;
		});
	}
}
</script>

<style lang="scss">
	@import '@/scss/components/layout/Column';
</style>
