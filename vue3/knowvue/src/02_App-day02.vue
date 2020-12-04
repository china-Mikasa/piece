<template>
  <p>访问原生dom事件</p>
  <button @click="btnClick($event)">mikasa最美</button>
  <button @click="one($event), two($event)">多事件处理</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    btnClick(e) {
      console.log(e)
      console.log(e)
    },
    one() {
      console.log(1)
    },
    two() {
      console.log(2)
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
</style>
