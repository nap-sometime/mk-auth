import Router, { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
	{ path: '/', component: () => import('@/components/HelloWorld.vue') }
]

const router = new Router({
	mode: 'history',
	routes
})

export default router;