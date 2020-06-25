import './set_public_path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import singleSpa from 'single-spa-vue'
import router from './router'
import app from './App.vue'
import '@/assets/styles/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMeta)

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		router,
		render: (h: any) => h(app)
	}
})