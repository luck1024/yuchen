<template>
	<div class="add">
		
		
		<div>
			房间编码:
		</div>
		<div>
			<input type="text"  readonly="readonly"  v-model="edit.BuildingNum" />
		</div>
		
		<div>
			电费余额:
		</div>
		<div>
			<input type="text" readonly="readonly" v-model="edit.moeny" />
		</div>
		
		<div>
			电表读数:
		</div>
		<div>
			<input type="text" readonly='readonly' v-model="edit.QuantityOfElectricity" />
		</div>
		
		<div>
			电费金额:
		</div>
		<div>
			<input type="text" v-model="money" />
		</div>
		
		
		
		<div class="submit">
			<button type="button" @click="submit">提交</button>&nbsp;
			<button type="button" @click="$emit('cancel',false)">取消</button>
		</div>
	</div>
</template>

<script>
	import j from './index.js'
	export default j
</script>

<style>
</style>

