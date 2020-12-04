<template>
  <div>
    <p>续命{{ count[1] }}秒</p>
    <button @click="btnClick">加一秒</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Giants",
  setup() {
    const mikasa = {
      name: "mikasa",
      age: 18,
      height: 170,
    };

    const giants = ["三笠", "艾伦", "爱尔敏"];

    // ref支持传入一个默认值
    let count = ref(giants);
    const btnClick = () => {
      count.value = count.value + 1;
    };

    return {
      count,
      btnClick,
    };
  },
};
</script>

<style>
</style>