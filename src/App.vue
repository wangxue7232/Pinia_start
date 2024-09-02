<script setup>
import { onMounted } from 'vue'
// 引入use打头的方法
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
// 执行方法得到store实例对象
const counter = useCounterStore()
console.log(counter);
onMounted(()=>{
  counter.getList()
})
// 结构(数据)
const { count,list,doubleCount } = storeToRefs(counter)
// 方法直接从原来的counter中结构
const { increment } = counter

// counter.count++
// 自动补全！ ✨  
// counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
// counter.increment()
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ count }}</div>
  <br>
  <button @click="increment">++</button>
  <br>
  <div>翻倍：{{doubleCount}}</div>
  <br>
  <ul>
    <li v-for="item in list" :key="item.id">{{item.name}}</li>
  </ul>
</template>