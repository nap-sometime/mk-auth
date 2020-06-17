import Router, { RouteConfig } from 'vue-router'
import { requireAuthentication } from '@/utils/auth';

const routes: RouteConfig[] = [
	{ path: '/', redirect: '/home' },
	{ path: '/auth/login', name: 'PageLogin', component: () => import('@/components/PageLogin.vue') },
	{ path: '/auth/logout', name: 'PageLogout', component: () => import('@/components/Logo.vue') }
]

const router = new Router({
	mode: 'history',
	routes
})

router.beforeEach(requireAuthentication)

export default router;