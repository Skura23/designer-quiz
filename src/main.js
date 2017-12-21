import Vue from 'vue'
// import domToImage from 'dom-to-image'
// import fileSaver from 'file-saver'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')