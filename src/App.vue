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
	computed: {
		getTitle(): string {
			const authInfo = getAuthInfo();
			return (authInfo && authInfo.username) || 'hi';
		},
	},
});
</script>

<style scoped>
#mk-auth {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
