export default{
	name:'login',
	data(){
		return{
			userAccount:'',
			userPWD:'',
			error:''
		};
	},
	methods:{
		login(){
			if( !this.$uil.checkChar(this.userAccount,5,16)){
				this.error="请输入账号"
				return;
			}if(!this.$uil.checkChar(this.userPWD,5,16)){
				this.error="请输入密码"
				return;
			}
			
			
			
			
			this.$request.request({
				url:'login/login',
			    data:{
				  userAccount:this.userAccount,
				  userPWD:this.userPWD
			}
			}).then(r=>{
				 if(!r.result) this.error = r.message;
				 else{//调用，刷新
					 this.$store.commit('saveUser', r.user);//调用action刷新key值
					 this.$store.dispatch('resetKey');
					 this.$router.replace('/home/index');
				 }
			});
		}
	},
	watch:{
		userAccount(newV,oldV){
			if(newV!=oldV) this.error="";
		},
		userPWD(newV,oldV){
			if(newV!=oldV) this.error="";
		}
	}
}