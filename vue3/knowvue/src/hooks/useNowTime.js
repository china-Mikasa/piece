import { ref, reactive, toRefs } from 'vue'

const nowTime = ref('00:00:00')

const time = new Date()

const data = reactive({
  hours: time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
  minutes: time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
  seconds: time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
})

const refTime = toRefs(data)

setInterval(() => {
  const time = new Date()
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  data.hours = hours
  data.minutes = minutes
  data.seconds = seconds
}, 1000)

// const getNowTime = () => {

// }



export {
  refTime
}

