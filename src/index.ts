import Vue, {Component} from 'vue-property-decorator';

import DebugMixin, {DebugOptions} from '@/mixins/DebugMixin';

import ApiMixin, {AxiosError, ApiException, AxiosResponse, CancelToken, FieldRef} from '@/mixins/ApiMixin';

export {
	Component,

	DebugMixin,
	DebugOptions,

	ApiMixin,
	AxiosError,
	ApiException,
	AxiosResponse,
	CancelToken,
	FieldRef,
};

export default Vue;
