import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
