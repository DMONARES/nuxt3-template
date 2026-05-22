export default {
	fetchVideosMain: async (query = { limit: 6, offset: 0 }) => {
		return await useRequest('api/main-videos', { query });
	},
}
