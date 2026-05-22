export default {
	fetchVideosMain: async (query = { limit: 6, offset: 0 }) => {
		return await useRequest('api/main-videos', { query });
	},
	fetchSubscribe: async (email) => {
    return await useRequest("api/subscribe", {
      asyncData: false,
      method: "POST",
      body: { email },
    });
  },
}
