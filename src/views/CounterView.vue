<template>
    <h2>輸入並加總：</h2>
    <input v-model="inputText"  @input="updateInputText($event.target.value)" />
    <p>目前數字{{count}}</p>
    <router-link to="/result">查看結果</router-link>
</template>

<script setup>

import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const {inputText, count} = storeToRefs(store)
const {updateInputText} = store

</script>