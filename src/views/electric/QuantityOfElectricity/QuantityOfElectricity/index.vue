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
			开始读数:
		</div>
		<div>
			<input type="text" readonly='readonly' v-model="edit.QuantityOfElectricity" />
		</div>
		
		<div>
			当前读数:
		</div>
		<div>
			<input type="text"  v-model="nums" title="电表当前读数" />
		</div>
		
		<div>
			电费单价:
		</div>
		<div>
			<input type="text" readonly='readonly' v-model="price" title="电费单价" />
		</div>
		
		<div>
			应充金额:
		</div>
		<div>
			<input type="text"  :value="moeny" placeholder="充值金额" />
		</div>
		
		
		
		<div class="submit">
			<button type="button" @click="submit">结算</button>&nbsp;
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

