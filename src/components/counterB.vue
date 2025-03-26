<template>
    <div style="border: 1px solid green; padding: 1rem;">
      <h2>🅱️ Counter B</h2>
      <p>同步顯示的 Count：{{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counter'
  import { storeToRefs } from 'pinia'
  
  const counter = useCounterStore()
  const { count } = storeToRefs(counter)
  </script>
  