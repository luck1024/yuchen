<template>
	<div style="width: 100%;">
		<showTable :showParms='showParms' :reset='reset' @showTableClick='showTableClick'> 
			<span>
				<select v-model="BuildingIndex" @change="BuildingFloor=building [BuildingIndex].BuildingFloor;
				BuildingFloorIndex=0;pageIndex=1;showParms.data.BuildingFloorID=BuildingFloor[0].BuildingFloorID; reset=!reset;">
					<option v-for="(i,index) in building" :value="index">
						{{i.BuildingNum +'-'+ i.BuildingName}}
					</option>
				</select>
				&nbsp;&nbsp;	                                        
				<select v-model="BuildingFloorIndex" @change="showParms.data.BuildingFloorID=BuildingFloor[0].BuildingFloorID; reset=!reset;">
					<option v-for="(i,index) in BuildingFloor" :value="index">
						{{i.BuildingFloorNum +'-'+ i.BuildingFloorName}}
					</option>
				</select>
				&nbsp;&nbsp;
				
			</span>
			
		</showTable>
		
		<maskDiv v-if='action!=""'>
			<pay :editdata="edit" @cancel='cancel' v-if="action=='payMoney'">
				
			</pay>
			
			<history @cancel='cancel' :history='historyParms'  v-if="action=='history'">
				
				
			</history>
			
		</maskDiv>
		
		
	</div>
</template>

<script>
	import j from './payMoney.js'
	export default j
</script>

<style>
	
</style>
