import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoLinkedin, CoGithub } from 'oh-vue-icons/icons'

addIcons(CoLinkedin, CoGithub);

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.mount('#app')
