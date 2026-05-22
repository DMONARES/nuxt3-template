<script setup>

</script>

<template>
  <div class="default-layout">
    <div class="default-layout__inner">
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.default-layout__inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
</style>
