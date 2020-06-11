import cookie from 'js-cookie'
import { NavigationGuard } from 'vue-router'

export function isAuthenticated() {
	return Boolean(cookie.get('auth'))
}

export function setAuthInfo(data: any) {
	cookie.set('auth', data, { expires: 7 })
}

export const requireAuthentication:NavigationGuard  = (to, _from, next) => {
	if(to.name !== 'PageLogin' && !isAuthenticated()) next({ name: 'PageLogin' })
	else next()
}