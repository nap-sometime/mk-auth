<template>
	<div class="relative h-screen w-screen bg-gray-100 flex items-center justify-center">
		<FormLogin />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {
		FormLogin: () => import('@/components/FormLogin.vue'),
	},
});
</script>
