<template>
	<div class="hello">
		<img src="@/assets/logo.png" width="120" />
		<h1>{{ msg }} render from @mk-auth</h1>
		<Greet />
	</div>
</template>

<script>
// import Greet from '@/components/Greet.vue';

export default {
	name: 'HelloWorld',
	components: {
		Greet: () => import('@/components/Greet.vue'),
	},
	props: {
		msg: {
			type: String,
			default: 'Hi',
		},
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
