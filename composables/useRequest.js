export const useRequest = (request, opts = {}) => {
	const config = useRuntimeConfig();

	const options = {
		...opts,
		baseURL: config.public.api,
		onResponseError(e) {
			console.error(e);
		},
	};

	return useFetch(request, options);
};