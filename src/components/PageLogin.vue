<template>
	<div>
		<form>
			<label for="username">ชื่อผู้ใช้</label>
			<input v-model.trim="username" type="text" name="username" />
			<label for="password">รหัสผ่าน</label>
			<input v-model.trim="password" type="password" name="password" />
			<button type="submit" @click.prevent="onLogin">ล็อคอิน</button>
		</form>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { setAuthInfo } from '@/utils/auth';

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
