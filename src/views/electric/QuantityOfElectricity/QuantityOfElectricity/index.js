export default{
	name:'edit',
	data(){
		return{
			edit:{},
			search:'',
			roomMoney:0,
			nums:0,
			price:1
		}
	},
	props:{
		editdata:{
			type:Object
			
			
		}//可以使用props中的值，但不能修改
	},
	created(){
		
		this.edit=this.editdata;
		this.roomMoney=this.edit.moeny;
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
				url:'room/QuantityOfElectricity',
				data:{
					roomID:this.edit.roomID,
				    nums:this.nums,
					price:this.price,
					recorderID:this.$store.state.user.userID
				}
			}).then(r=>{
				this.$uil.showMessage({
					text:r.message
				})
				this.$emit('cancel', r.result);
			})
	}
	},
	computed:{
		moeny(){
			if(this.nums==0) return "清输入当前电表读数";
			if(this.nums<this.edit.QuantityOfElectricity)return"截至度数不得小于开始读数";
			this.roomMoney -=(this.nums-this.edit.QuantityOfElectricity)*this.price;
			return (this.nums-this.edit.QuantityOfElectricity)*this.price;
			
			
		}
	},
	wacth:{
		nums(newV,oldV){
			
			this.roomMoney= this.edit.moeny;
		}
	}
	
}
