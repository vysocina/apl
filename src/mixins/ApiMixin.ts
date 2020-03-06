import {Component, Mixins} from 'vue-property-decorator';
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken} from 'axios';

import {DebugMixin} from '@/index';

interface ApiException {
	status: 'error' | 'unknown';
	code: 401 | 403 | 404 | 500;
	message: string;
}

type FieldRef = Vue & { validate(): boolean };

export {
	AxiosError,
	AxiosResponse,
	CancelToken,
	ApiException,
	FieldRef,
};

@Component({})
export default class ApiMixin extends Mixins(DebugMixin) {
	private $store: any;
	private $t: any;

	private axios: AxiosInstance | undefined;
	private isFetchingLocal: boolean = false;

	get axiosInstance(): AxiosInstance {
		return this.axios ? this.axios : axios;
	}

	get isFetching(): boolean {
		// when store is not available, fetching property will not work
		if (typeof this.$store === 'undefined') {
			return this.isFetchingLocal;
		}

		return this.$store.state.fetching;
	}

	get errorObject(): ApiException | null {
		// wait for fetch completion
		if (this.isFetching) {
			return null;
		}
		// default error message -> translations/{name.json} -> "error.unknown.message"
		return {
			status: 'unknown',
			code: 500,
			message: this.$t ? this.$t('error.unknown.message') : 'ApiException: response status code not recognized <401,403,404,500>',
		};
	}

	/**
	 * @param url: string
	 * @param data: any
	 * @param config: AxiosRequestConfig | undefined
	 * @returns Promise<AxiosResponse>
	 */
	public async POST(url: string, data: any, config: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
		this.debugLog({c: 'ApiMixin', m: `POST ${url}`});

		this.isFetchingLocal = true;

		return new Promise(async (resolve, reject) => {
			try {
				const axiosResponse = await this.axiosInstance.post(url, data, config);

				this.debugLog({c: 'ApiMixin', m: `POST ${url} DONE`});

				resolve(axiosResponse);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * @param url: string
	 * @param config: AxiosRequestConfig | undefined
	 * @returns Promise<AxiosResponse>
	 */
	public async GET(url: string, config: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
		this.debugLog({c: 'ApiMixin', m: `GET ${url}`});

		this.isFetchingLocal = true;

		return new Promise(async (resolve, reject) => {
			try {
				const axiosResponse = await this.axiosInstance.get(url, config);

				this.debugLog({c: 'ApiMixin', m: `GET ${url} DONE`});

				resolve(axiosResponse);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * @param refName?: string
	 * @returns boolean
	 */
	public validateForm(refName: string = 'Field'): boolean {
		this.debugLog({c: 'ApiMixin', m: `validateForm start`});

		const validations: boolean[] = Object.keys(this.$refs)
			.filter((fieldName: string) => {
				// keep every ref which has `refName` in its name
				return fieldName.indexOf(refName) > -1;
			})
			.map((fieldName: string) => {
				// get the validation method of filtered fields
				const validate = (this.$refs[fieldName] as FieldRef).validate;

				// and run it to get output of validation
				return validate ? validate() : true;
			});

		// returns true only when every input is valid
		const state: boolean = validations.every((isValid: boolean) => isValid);
		this.debugLog({c: 'ApiMixin', m: `validateForm stop, with state: ${state}`});
		return state;
	}

	/**
	 * @param error: AxiosError
	 * @param callback: (e: ApiException) => void
	 * @returns void
	 */
	public catchException(error: AxiosError, callback: (e: ApiException) => void): void {
		const {response} = error;

		// return error object if response is unavailable
		if (!response) {
			if (this.errorObject) {
				callback(this.errorObject);
			}

			return;
		}

		// otherwise return error constructed from exception
		const {data} = response;
		const {status, code, message} = data;

		callback({status, code, message});
	}
}
