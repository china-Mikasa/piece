<template>
  <div>
    <p>{{ flag }}</p>
    <ul>
      <li v-for="(item, index) of giants" :key="item.age">
        <button @click="btnClick(index)">{{ item.name }}</button>
      </li>
    </ul>
    <p>当前选择{{selectGiants}}</p>
    <button @click="changeComponent">修改组件</button>
  </div>
</template>

<script>
// 生命周期学习

/**
 *  @vue2 生命周期
 *  @beforeCreate 组件创建之前
 *  @created 组件创建完成
 *  @beforeMount 组件渲染之前
 *  @Mounted 组件渲染完成
 *  @beforeUpdate 组件修改之前
 *  @updated 组件修改完成
 *  @beforeDestroy 组件销毁之前
 *  @destroyed 组件销毁完成
 *  @actived keep-alive 组件激活时调用
 *  @deactived keep-alive 组件移除时调用
 * */

/**
 * @vue3 生命周期
 * 这些生命周期钩子注册函数只能在 setup() 期间同步使用。
 * @beforeCreate @created -> @setup 创建组件之前和组件创建完成都在setup完成
 * @beforeMount -> @onBeforeMount 组件渲染之前
 * @mounted -> @onMouted 组件渲染完成
 * @beforeUpdate -> @onBeforeUpdate 组件修改之前
 * @updated -> @onUpdated 组件修改完成
 * @onBeforeUnmount 组件卸载之前
 * @onUnmounted 组件卸载完成
 * @onErrorCaptured 捕获异常
 * @onRenderTracked 状态跟踪组件，跟踪全部状态
 * @onRenderTriggered 精确跟踪状态
 *
 * */

import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  ref,
  reactive,
  toRefs,
} from "vue";

export default {
  setup() {
    // const flag = ref(true);
    const data = reactive({
      giants: [
        { name: "mikasa", age: 17 },
        { name: "allen", age: 18 },
        { name: "Armin ", age: 18 },
      ],
      flag: true,
      selectGiants: '',
      changeComponent: () => {
        data.flag = !data.flag;
      },
      btnClick: (index) => {
        data.selectGiants = data.giants[index].name;
      },
    });

    const refDate = toRefs(data);

    // const changeComponent = () => {
    //   flag.value = !flag.value;
    //   console.log(flag.value);
    // };

    onMounted(() => {
      console.log("onMounted=====================");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount========================");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate======================");
    });
    onUpdated(() => {
      console.log("onUpdated===================");
    });
    // onRenderTracked((event) => {
    //   console.log(event);
    // });
    onRenderTriggered((event) => {
      console.log(event);
    });
    return {
      ...refDate,
    };
  },
};
</script>

<style>
</style>