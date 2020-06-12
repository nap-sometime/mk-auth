<template>
	<div id="mk-auth">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	metaInfo: {
		title: 'Hi',
		titleTemplate: '%s | Auth',
	},
};
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
