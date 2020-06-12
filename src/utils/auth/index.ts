import cookie from 'js-cookie'
import { NavigationGuard } from 'vue-router'

export const authCookieName = 'auth'

export function isAuthenticated() {
	return Boolean(cookie.get('auth'))
}

export interface IAuthInfo {
	username: string
	login_id: string
}

export function getAuthInfo(params?: Partial<IAuthInfo>): IAuthInfo | null {
	return JSON.parse(cookie.get(authCookieName) || 'null')
}

export function setAuthInfo(data: IAuthInfo) {
	cookie.set(authCookieName, JSON.stringify(data), { expires: 7 })
}

export function removeAuthInfo() {
	cookie.remove(authCookieName)
}

export const requireAuthentication:NavigationGuard  = (to, _from, next) => {
	if(to.name !== 'PageLogin' && !isAuthenticated()) next({ name: 'PageLogin' })
	else next()
}