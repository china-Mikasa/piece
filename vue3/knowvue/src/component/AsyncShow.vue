<template>
  <h1>{{ result }}</h1>
</template>

<script>
import { defineComponent  } from "vue";

export default defineComponent ({
  setup() {
    return new Promise((resole, reject) => {
      const flag = true;
      if (flag) {
        setTimeout(() => {
          return resole({ result: "Vue3" });
        }, 2000);
      }
    });
  },
});
</script>

<style></style>
