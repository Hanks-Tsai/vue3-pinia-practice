<template>
    <h2>結果畫面</h2>
    <p>你輸入的文字：{{inputText}}</p>
    <p>加總的結果：{{count}}</p>
    <router-link to="/">返回輸入頁</router-link>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const {inputText, count} = storeToRefs(store);


</script>