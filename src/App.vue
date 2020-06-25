<template>
	<div id="mk-auth">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAuthInfo } from '@/utils/auth';
import { MetaInfo } from 'vue-meta';

export default Vue.extend({
	name: 'App',
	metaInfo(): MetaInfo {
		return {
			title: this.getTitle,
			titleTemplate: '%s | Auth',
		};
	},
	mounted() {
		this.logInterval();
	},
	computed: {
		getTitle(): string {
			const authInfo = getAuthInfo();
			return (authInfo && authInfo.username) || 'hi';
		},
	},
	methods: {
		logInterval() {
			let timer;
			if (!timer) clearInterval(timer);

			timer = setInterval(() => {
				console.log(`${Date.now()} - @mk/auth`);
			}, 5000);
		},
	},
});
</script>
