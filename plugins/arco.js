import { defineNuxtPlugin } from '#app'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ArcoVue)
    nuxtApp.vueApp.use(ArcoVueIcon)
})