<template>
  <input v-model="info" placeholder="请输入标题" />
  <button @click="changeInfo">设置标题</button>
</template>

<script>
import { ref, reactive, watch, toRefs } from "vue";

export default {
  setup() {
    const title = ref("这是一个标题");
    const data = reactive({
      info: '',
      changeInfo: () => {
        console.log(123)
        title.value = data.info
      },
    })
    const refData = toRefs(data)


    // 监听某个状态改变的副作用
    watch(title, (newValue, oldValue) => {
      document.title = newValue;
    });

    watch(() => data.info, (newValue, oldValue) => {
      document.title = newValue
    })

    return {
      title,
      ...refData
    };
  },
};
</script>

<style>
</style>