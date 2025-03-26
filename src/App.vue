<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/result">結果頁</router-link>
  </nav>
  <h1>🌐 Pinia 跨元件共享資料示範</h1>
  <router-view />
  <button @click="clearStorage()">清除儲存資料</button>
  <CounterA />
  <CounterB />
</template>


<script setup>
import CounterA from './components/CounterA.vue'
import CounterB from './components/CounterB.vue'
import { useCounterStore } from './stores/counter'

const store = useCounterStore()
const {clearStorage} = store

</script>