import Vue from 'vue'
import singleSpa from 'single-spa-vue'
import router from './router'
import app from './App.vue'

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		router,
		el: '#app-auth',
		render: (h: any) => h(app)
	}
})