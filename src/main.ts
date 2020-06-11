import './set_public_path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import singleSpa from 'single-spa-vue'
import router from './router'
import app from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		router,
		render: (h: any) => h(app)
	}
})