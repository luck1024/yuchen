<template>
	  <div class="login flex" @keypress.enter="login()">
		 <div>
			 <h1 class="login_title">小区电力收费系统</h1>
			<!-- <div >空调管理系统</div> -->
			 <div>
				 <label>
					 <input class="userAccount" :class="{'red':!$uil.checkChar(userAccount,5,16)}" v-model="userAccount" type="text" placeholder="请输入5-16位账号" />
					 <span></span>
				 </label>
			 </div>
			 <div>
			 			 <label>
			 				 <input class="passworld" :class="{'red':!$uil.checkChar(userPWD,6,16)}" v-model="userPWD" type="password" placeholder="请输入6-16位密码" />
			 				 <span></span>
			 			 </label>
			 </div>
			 <div class="red error">
				 {{error}}
			 </div>
			 <div class="login_submit">
				 <button type="button" :disabled="!$uil.checkChar(userAccount,5,16)||!$uil.checkChar(userPWD,6,16)"  
				  :class="{'bg_gray':!$uil.checkChar(userAccount,5,16)||!$uil.checkChar(userPWD,5,16)}"   @click="login" >登录</button>
			 </div>
		 </div>
		 
	  </div>
</template>

<script>
	import j from './login.js'
	export default j
	
</script>

<style>
	
	@import url("./login.css");
</style>
