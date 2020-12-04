<template>
  <div>
    <p>reactive使用</p>
    <p>{{ num }}{{ books.title }}</p>
  </div>
</template>

<script>
import { ref, reactive, h } from "vue";

// h函数应该是返回一个虚拟dom,最后渲染到template上     如果template上有dom则会覆盖

export default {
  setup() {
    const num = ref(0);
    const books = reactive({ title: "Vue 3 Guide" });
    return {
      num,
      books,
    };
    // return () => h('div', [num.value, books.title])
  },
};
</script>

<style>
</style>