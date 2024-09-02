// 倒入一个方法 defineStore
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

const API_URL = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore('counter', () => {
  // 定义数据(state)
  const count = ref(0)
  // 定义方法(action 同步+异步)
  function increment() {
    count.value++
  }
  // getters
  const doubleCount = computed(()=>count.value*2)
  // 定义异步action
  const list = ref([])
  // 定义函数（在组件中调用）
  const getList = async ()=>{
    const res = await axios.get(API_URL)
    console.log(res);
    list.value = res.data.data.channels
  }

  // 以对象的方式return供组件使用
  return { count, increment,doubleCount,list,getList }
})
