<template>
	<div class="history">
		<div class="search">
			<button type="button" @click="$emit('cancel')">返回</button>
		</div>


		<div class="searchdata">
			<table>
				<!-- <table cellpadding="0" cellspacing="0"> -->
				<thead>
					<tr>
						<th>序号</th>
						<th v-for="(i,index) in history.thead" :class="i.style==undefined?'':i.style">
							{{i.name}}
						</th>
						<th v-for="(i,index) in history.action" :class="i.style==undefined?'':i.style">
							{{i.name}}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(i,index) in showData">
						<td>
							{{(index+1)+(pageIndex-1)*pageSize}}
						</td>
						<td v-for="(j) in history.thead">
							{{i[j.key]}}
						</td>
						<td v-for="(j) in history.action">
							<button type="button" @click="$emit('showTableClick',{key:j.key,playLoad:i})" :class="i.style==undefined?'':j.style">
								{{j.name}}
							</button>
						</td>

					</tr>
				</tbody>
			</table>

		</div>

		<div class="changpage" v-if="!history.isPage">
			<button type="button" :class="{'bg_gray':pageIndex<=1}" :disabled="pageIndex<=1" @click="pageIndex--;getData()">上一页</button>
			<select v-model="pageSize" @change="pageIndex=1;getData()">
				<option value="10">10条/页</option>
				<option value="20">20条/页</option>
				<option value="30">30条/页</option>
			</select>

			<span>
				<!-- 向下取整 -->
				{{pageIndex+'页/'+Math.ceil((count==0?1:count)/pageSize)+'页 共计:' +count+'条'}}

			</span>

			<button type="button" :class="{'bg_gray':pageIndex>=Math.ceil((count==0?1:count)/pageSize)}" :disabled="pageIndex>=Math.ceil((count==0?1:count)/pageSize)"
			 @click="pageIndex++;getData()">下一页</button>
		</div>


	</div>
</template>


<script>
	import j from './history.js'
	export default j
</script>

<style>
</style>
