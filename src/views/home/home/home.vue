<template>
	<div class="content"> 
		<userinfor></userinfor>
		
		<div class="mid">
			<!-- 左边 -->
			<div class="mid_left">
				<menuItem></menuItem>
			</div>
			<!-- 右边 -->
			<div class="mid_right flex" >
				<router-view>
					
				</router-view>
			</div>
		</div>
		
		<copy></copy>
	</div>
</template>


<script>
	import userinfor from '../../../components/userinfor/userinfor.vue'
	import copy from '../../../components/copy/copy.vue'
	import menuItem from '../../../components/menu/menu.vue'
export default{
	name:'home',
	components:{
		userinfor,
		copy,
		menuItem
	}
}
</script>


<style>
	
</style>
