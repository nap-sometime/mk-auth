<template>
	<div class="w-full max-w-xs">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
					Username
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Username"
					v-model="username"
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
					Password
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
					v-model="password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
					@click.prevent="onLogin"
				>
					Sign In
				</button>
				<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
					Forgot Password?
				</a>
			</div>
		</form>
		<p class="text-center text-gray-500 text-xs">
			&copy;2020 Acme Corp. All rights reserved.
		</p>
	</div>
</template>

<script lang="ts">
import { setAuthInfo } from '@/utils/auth';
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		username: '',
		password: '',
	}),
	methods: {
		onLogin(): void {
			setAuthInfo({ username: this.username, login_id: String(Date.now()) });
			this.$router.replace('/home');
		},
	},
});
</script>
