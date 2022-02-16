<template>
	<div class="menu">
		
		
		<div class="menu_item1" @click="$router.replace('/home/index')" :class="{'selected':$route.path.indexOf('/home/index')>-1}"><img src="../../assets/iocn/首页.svg"/>系统首页</div>
		
		<div @click="room=!room" class="menu_item1"><img src="../../assets/iocn/楼栋管理.svg"/>房间管理
		    &nbsp;&nbsp;
		   <img v-show="!room" src="../../assets/iocn/xiangyou.svg" />
		   <img v-show="room" src="../../assets/iocn/xiala.svg" />
		   </div>
		     <div v-show="room"  class="menu_item2"  :class="{'selected':$route.path.indexOf('/room/building')>-1}" 
			   @click="$router.replace('/room/building')">楼栋管理</div>
			   
		     <div v-show="room" class="menu_item2"  :class="{'selected':$route.path.indexOf('/room/floor')>-1}" 
			   @click="$router.replace('/room/floor')">楼层管理</div>
			   
		     <div v-show="room" class="menu_item2" :class="{'selected':$route.path.indexOf('/room/room')>-1}" 
			   @click="$router.replace('/room/room')">房间管理</div>
			   
			   
			   <div @click="electric=!electric" class="menu_item1"><img src="../../assets/iocn/电费.svg"/>电费管理
			       &nbsp;&nbsp;
			      <img v-show="!electric" src="../../assets/iocn/xiangyou.svg" />
			      <img v-show="electric" src="../../assets/iocn/xiala.svg" />
			      </div>
			        <div v-show="electric"  class="menu_item2"  :class="{'selected':$route.path.indexOf('/electric/payMoney')>-1}" 
			   	   @click="$router.replace('/electric/payMoney')">电费充值</div>
				   
				   <div v-show="electric"  class="menu_item2"  :class="{'selected':$route.path.indexOf('/electric/QuantityOfElectricity')>-1}"
				   @click="$router.replace('/electric/QuantityOfElectricity')">房间电费</div>
			   	   
			       
			   
	</div>
</template>

<script>
	export default{
		name:'menuItem',
		data(){
			return{
				room:false,
				electric:false
			}
		}
	}
</script>

<style>
	
</style>
