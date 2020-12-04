<template>
  <teleport to="#modal">
    <div class="center"></div>
  </teleport>
</template>

<script>
export default {
  name: 'modal'
};
</script>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 2px solid red;
}
</style>