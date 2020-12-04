<template>
  <div>初始vue3</div>
  <p>{{ count }}</p>
  <button @click="count++">续一秒</button>
  <p :title="msg">动态绑定属性查看提示信息</p>
  <p>双向绑定</p>
  <input v-model="message" />
  <p>动态key值绑定属性</p>
  <!-- <p :[title]='pKey'></p> -->
  <ul>
    <!-- 遍历数据 -->
    <li v-for="(item, index) of giants" :key="item.id">
      {{ index }}：{{ item.name }}
    </li>
    <!-- 遍历对象 -->
    <li v-for="(value, name, index) of mikasa" :key="value">
      {{ name }}：{{ value }}：{{ index }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: "0",
      msg: "span提示信息",
      message: "双向绑定的数据",
      pKey: "title",
      giants: [
        { id: 23, name: "三笠" },
        { id: 24, name: "艾伦" },
        { id: 25, name: "爱尔敏" },
      ],
      mikasa: {
        name: "三笠",
        age: 18,
        height: 170,
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
    // 获取对象的键 
    const _key = Object.keys(this.mikasa)
    console.log(_key)
  },
  updated() {
    console.log(this.count);
  },
};
</script>

<style scoped>
</style>
