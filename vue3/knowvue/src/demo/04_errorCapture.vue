<template>
  <Suspense>
    <template #default>
      <AsyncShow />
    </template>
    <template #fallback>
      <h1>Loading....</h1>
    </template>
  </Suspense>
</template>

<script>
import AsyncShow from "../component/AsyncShow.vue";

export default {
  components: { AsyncShow },
  setup() {
    return {};
  },
};
</script>

<style></style>
