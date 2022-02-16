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
			选择楼层
		</div>
		<div>
			<select v-model="edit.BuildingName" disabled="disabled">
				<option v-for="(i,index) in edit.BuildingFloor" :value="i.BuildingName">
					{{i.BuildingFloorNum +'-'+ i.BuildingFloorName}}
				</option>
			</select>
		</div>
		<div>
			房间编码:
		</div>
		<div>
			<input type="text" v-model="edit.BuildingNum" />
		</div>
		<div>
			电费余额:
		</div>
		<div>
			<input type="text" v-model="edit.moeny" />
		</div>
		<div>
			电表度数:
		</div>
		<div>
			<input type="text" v-model="edit.QuantityOfElectricity" />
		</div>
		<div>
			房间状态:
		</div>
		<div>
			<button type="button" @click="edit.roomState=0" :class="{'bg_gray':!edit.roomState==1}">正常</button>
			<button type="button"  @click="edit.roomState=1" :class="{'bg_gray':edit.roomState==1}">停用</button>
		</div>
		<div>
			备注:
		</div>
		<div>
			<input type="text" v-model="edit.mask" />
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
