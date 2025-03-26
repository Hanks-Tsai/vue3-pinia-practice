import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import ResultView from '../views/ResultView.vue'

const routes = [
  { path: '/', component: CounterView },
  { path: '/result', component: ResultView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
