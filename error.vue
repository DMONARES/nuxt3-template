<script setup>
const props = defineProps({
	error: Object
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<div class="error-layout">
		<Header/>
		<main class="error-layout__main">
			<div class="error-layout__wrapper">
				<Icons404 />
				<div class="error-layout__title">страница не найдена</div>
			</div>
		</main>
		<Footer/>
	</div>
</template>

<style lang="scss" scoped>
.error-layout
{
	position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

	&__main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	&__wrapper
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		margin-bottom: 80px;
	}

	&__title
	{
		font-size: 24px;
		line-height: 32px;
		font-weight: 700;
	}
}
</style>