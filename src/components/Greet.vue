<template>
	<div>
		<h4>Async component from Greet xx</h4>
		<button @click="logout">Log out</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { removeAuthInfo } from '@/utils/auth';

export default Vue.extend({
	methods: {
		logout() {
			removeAuthInfo();
			this.$router.push('/home');
		},
	},
});
</script>

<style scoped>
div {
	padding: 0.5rem;
	background-color: burlywood;
	color: #333;
}
</style>
