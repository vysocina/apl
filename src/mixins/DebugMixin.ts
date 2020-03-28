import {Component, Vue} from 'vue-property-decorator';

interface DebugOptions {
	c?: string;
	m?: string;
	t?: Date;
	debugWithTime?: boolean;
}

export {
	DebugOptions,
};

@Component({})
export default class DebugMixin extends Vue {
	// switch to true in component used with DebugMixin
	public debug: boolean = false;

	public debugLog(debugOptions: DebugOptions): void {
		// if debug is turned off, dont go any further
		if (!this.debug) {
			return;
		}

		const defaultDebugOptions: DebugOptions = {
			c: 'DebugMixin',
			m: 'missing `message` parameter in options',
			t: new Date(),
			debugWithTime: false,
		};

		// merge default debug options, with the ones provided
		const callOptions = {defaultDebugOptions, ...(debugOptions ? debugOptions : {})};
		const {c, m, t, debugWithTime} = callOptions;

		const timedLog = (debugWithTime && t) ? `${t.toUTCString()}: ` : '';

		// tslint:disable-next-line:no-console
		console.log(`${timedLog}[${c}] ${m}`);
	}
}
