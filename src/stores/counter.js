import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
    state: () => ({
        count: localStorage.getItem('count') || 0, 
        inputText: localStorage.getItem('inputText') || ''
    }),
    getters: {
        doubleCount: (state) => state.count*2
    },
    actions:{
        increment(){
            this.count++
            localStorage.setItem('count', this.count)
        },

        updateInputText(value){
            this.inputText = value
            localStorage.setItem('inputText', value)
        },

        clearStorage() {
            localStorage.removeItem('count')
            localStorage.removeItem('inputText')
        }
          
    }
})