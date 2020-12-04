<template>
  <!-- <p>{{ nowTime }}</p> -->
  <p>时:{{ hours }}</p>
  <p>分:{{ minutes }}</p>
  <p>秒:{{ seconds }}</p>
  <!-- <button @click="getNowTime">显示时间</button> -->
</template>

<script>
import { ref } from "vue";
// import { nowTime, getNowTime } from "../hooks/useNowTime";
import { refTime } from "../hooks/useNowTime";

export default {
  setup() {
    return {
      ...refTime,
    };
  },
};
</script>

<style>
</style>