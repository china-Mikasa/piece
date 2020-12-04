import { createApp } from 'vue'
// import App from './01_App-day01.vue'
// import App from './02_App-day02.vue'
// import App from './01_ref/01_ref.vue'
// import App from './02_reactive/02_reactive.vue'
// import App from './03_life-cycle/01_life-cycle.vue'
// import App from './04_watch/01_watch.vue'
// import App from './demo/01_time.vue'
// import App from './demo/02_teleport.vue'
import App from './demo/03_Suspense.vue'
import './index.css'

// 渲染 createApp() 传入一个组件调用mount() 传入需要挂载的dom
createApp(App).mount('#app')
