<template>
	<div class="add">
		<div>
			楼栋编码:
		</div>
		<div>
			<input type="text" v-model="edit.BuildingNum" />
		</div>
		<div>
			建筑名称:
		</div>
		<div>
			<input type="text" v-model="edit.BuildingName" />
		</div>
		
		<div class="submit">
			<button type="button" @click="submit">提交</button>&nbsp;
			<button type="button" @click="$emit('cancel',false)">取消</button>
		</div>
	</div>
</template>

<script>
	import j from './edit.js'
	export default j
</script>

<style>
</style>
