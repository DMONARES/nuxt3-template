<script setup>
const route = useRoute();
const { themeRef, resetProjectLayoutTheme } = useProjectLayoutThemeState();

const htmlProjectThemeVars = computed(() => {
	const t = themeRef.value;
	if (!t)
		return '';
	const parts = [];
	if (t.accent)
		parts.push(`--layout-project-accent:${t.accent}`);
	if (t.footerOverlay)
		parts.push(`--layout-project-footer-overlay:${t.footerOverlay}`);
	return parts.join(';');
});

useHead(computed(() => ({
	htmlAttrs: { style: htmlProjectThemeVars.value },
})));

watch(() => route.path, (path) => {
	if (!path.startsWith('/project/'))
		resetProjectLayoutTheme();
});
</script>

<template>
  <div class="default-layout">
		<div class="default-layout__inner">
			<Header />
			<main class="main-content">
				<slot />
			</main>
			<Footer />
		</div>
		<BlockNewsDetailPopup />
		<UiCookieConsent />
  </div>
</template>

<style lang="scss">
.default-layout
{
	position: relative;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	--footer-bottom-section-padding-top: 0px;
}

.default-layout__inner
{
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
}

.main-content
{
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 0;
}
</style>
