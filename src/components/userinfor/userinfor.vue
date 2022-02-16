<template>
	<div class="top">
		<img src="../../assets/iocn/用户.svg"/> 欢迎您：{{$store.state.user.userName}}
		<button type="button" @click="close" >退出</button>
	</div>
</template>

<script>
	export default{
		name:'userinfor',
		methods:{
			close(){
				this.$uil.showMessage({
					text:'是否确定退出',
					type:'confirm',
					ok:()=>{
						this.$store.commit('exit');
						this.$router.replace('/login');
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
