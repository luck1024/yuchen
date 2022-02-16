<template>
	<div class="show">
		<div class="search">
			<select v-model="BuildingIndex" @change="BuildingFloor=building [BuildingIndex].BuildingFloor;
			BuildingFloorIndex=0;pageIndex=1;getData()">
				<option v-for="(i,index) in building" :value="index">
					{{i.BuildingNum +'-'+ i.BuildingName}}
				</option>
			</select>
			&nbsp;&nbsp;	                                        
			<select v-model="BuildingFloorIndex" @change="pageIndex=1;getData()">
				<option v-for="(i,index) in BuildingFloor" :value="index">
					{{i.BuildingFloorNum +'-'+ i.BuildingFloorName}}
				</option>
			</select>
			&nbsp;&nbsp;
			<input type="text" v-model="search" placeholder="请输入房间号" />
			&nbsp;&nbsp;
			<button type="button" @click='pageIndex=1;getData()' > 搜索</button>
			&nbsp;
			<button type="button" class="bg_green" @click="add">添加</button>
		
		</div>
		
		
		<div class="searchdata">
			<table>
			<!-- <table cellpadding="0" cellspacing="0"> -->
				<thead>
					<th>序号</th>
					<th>楼栋名称</th>
					<th>楼层名称</th>
					<th>房间编号</th>
					<th>电费余额</th>
					<th>电表读数</th>
					<th>房间状态</th>
					<th>备注</th>
					
					<th>修改</th>
				</thead>
				<tbody>
					<tr v-for="(i,index) in showdata">
						<td>
							{{(index+1)+(pageIndex-1)*pageSize}}
						</td>
						
						<td>
							{{i.BuildingName}}
						</td>
						
						<td>
							{{i.BuildingFloorName}}
						</td>
						<td>
							{{i.BuildingNum}}
						</td>
						<td>
							{{i.moeny|rmb}}
						</td>
						<td>
							{{i.QuantityOfElectricity|Electricity}}
						</td>
						<td>
							{{i.roomState|roomstate}}
						</td>
						<td>
							{{i.mask}}
						</td>
						
						<td>
							<button type="button" @click="update(i)">修改</button>
						</td>
					</tr>
				</tbody>
			</table>
			
		</div>
		
		<div class="changpage">
			<button type="button" :class="{'bg_gray':pageIndex<=1}" :disabled="pageIndex<=1"
			 @click="pageIndex--;getData()">上一页</button>
			 <select v-model="pageSize" @change="pageIndex=1;getData()">
				 <option value="10">10条/页</option>
				 <option value="20">20条/页</option>
				 <option value="30">30条/页</option>
			 </select>
			 
			 <span>
				 <!-- 向下取整 -->
				{{pageIndex+'页/'+Math.ceil((count==0?1:count)/pageSize)+'页  共计:' +count+'条'}}
				 
			 </span>
			 
			 <button type="button" :class="{'bg_gray':pageIndex>=Math.ceil((count==0?1:count)/pageSize)}"
			  :disabled="pageIndex>=Math.ceil((count==0?1:count)/pageSize)" @click="pageIndex++;getData()">下一页</button>
		</div>
		<maskDiv v-if="action">
			
			<edit :editdata='edit' @cancel='cancel'></edit>
		</maskDiv>
		
	</div>
</template>

<script>
	import j from './index.js'
	export default j
</script>

<style>
	.show{
		margin: 0px auto;
	}
</style>
