<template>
	<div class="mask flex">
		<slot></slot>
		
		
	</div>
</template>

<script>
	export default{
		name:'maskDiv'
	}
</script>

<style>
	.mask{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		min-height: 100vh;
		
		z-index: 1000;
	}
</style>
