import Vue from 'vue'
import App from '@/module/App.vue'
import router from './router/index'
import install from '@/component/common'
import { WebSDKPlugin } from './public/api/websdk'
import { DataUriPlugin }  from '@/public/common/DataUri'
import Logger, { LoggerPlugin } from '@/public/base/Logger'
import i18n from '@/i18n'
//import { TrayIconPlugin } from '@/public/common/TrayIcon'

Vue.config.productionTip = false
Vue.use(WebSDKPlugin)
Vue.use(DataUriPlugin)
Vue.use(LoggerPlugin)
Vue.prototype.$VueBus = new Vue();
//Vue.use(TrayIconPlugin)
install(Vue)
Logger.log('start to new Vue')
const vue = new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')