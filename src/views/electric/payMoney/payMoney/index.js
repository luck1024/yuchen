export default{
	name:'edit',
	data(){
		return{
			edit:{},
			search:'',
			money:0
		}
	},
	props:{
		editdata:{
			type:Object
			
			
		}//可以使用props中的值，但不能修改
	},
	created(){
		this.edit=this.editdata;
		
	},
	
	methods:{
		add(){
				this.edit={
						BuildingName:'',
						BuildingID:0,
						BuildingNum:''
					   
				}
				this.action=!this.action;
			},
		
		
		submit(){
			this.$request.request({
				url:'room/RechargeMoney',
				data:{
					roomID:this.edit.roomID,
				  moeny  :this.money,
					recorderID:this.$store.state.user.userID
				}
			}).then(r=>{
				this.$uil.showMessage({
					text:r.message
				})
				this.$emit('cancel', r.result);
			})
	}
	}
	
}
