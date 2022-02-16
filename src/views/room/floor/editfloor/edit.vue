<template>
	<div class="add">
		<div>
			选择楼栋
		</div>
		<div>
			<select v-model="edit.BuildingID" disabled="disabled">
				<option v-for="(i,index) in edit.building" :value="i.BuildingID">
					{{i.BuildingNum +'-'+ i.BuildingName}}
				</option>
			</select>
		</div>
		<div>
			楼层编码:
		</div>
		<div>
			<input type="text" v-model="edit.BuildingFloorNum" />
		</div>
		<div>
			楼层名称:
		</div>
		<div>
			<input type="text" v-model="edit.BuildingFloorName" />
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
