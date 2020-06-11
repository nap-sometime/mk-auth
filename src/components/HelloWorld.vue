<template>
	<div class="hello">
		<img src="@/assets/logo.png" width="120" />
		<h1>render from @mk-auth</h1>
		<Greet />
	</div>
</template>

<script lang="ts">
export default {
	components: {
		Greet: () => import('@/components/Greet.vue'),
	},
};
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.hello {
	padding: 0.5rem;
	background: blanchedalmond;
}
</style>
