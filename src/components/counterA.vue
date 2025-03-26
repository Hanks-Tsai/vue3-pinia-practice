<template>
    <div style="border: 1px solid blue; padding: 1rem; margin-bottom: 1rem;">
      <h2>🅰️ Counter A</h2>
      <p>Count：{{ count }}</p>
      <button @click="increment">+1</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counter'
  import { storeToRefs } from 'pinia'
  
  const counter = useCounterStore()
  const { count } = storeToRefs(counter)
  const { increment } = counter
  </script>
  