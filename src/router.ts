import Router, { RouteConfig } from 'vue-router'
import { requireAuthentication } from '@/utils/auth';

const routes: RouteConfig[] = [
	{ path: '/', component: () => import('@/components/HelloWorld.vue') },
	{ path: '/auth/login', name: 'PageLogin', component: () => import('@/components/PageLogin.vue') }
]

const router = new Router({
	mode: 'history',
	routes
})

router.beforeEach(requireAuthentication)

export default router;