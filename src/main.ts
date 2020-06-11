import Vue from 'vue'
import singleSpa from 'single-spa-vue'
// import router from './router'
import app from './App.vue'

Vue.config.productionTip = false

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		// router,
		render: (h: any) => h(app)
	}
})