import { createApp } from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faDownload, faFile } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'

// Disable Font Awesome CSS auto-import to reduce bundle size
config.autoAddCss = false

library.add(faGithub, faLinkedin, faArrowUpRightFromSquare, faDownload, faFile)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
