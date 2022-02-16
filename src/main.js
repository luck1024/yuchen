import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import uil from './assets/js/share.js'
import request from'./network/index.js'
import store from './stroe/store.js'

Vue.config.productionTip = false

Vue.prototype.$request =request;//给vue增加一个属性
Vue.prototype.$uil =uil;//给vue增加一个属性

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')


