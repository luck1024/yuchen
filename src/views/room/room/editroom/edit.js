export default{
	name:'edit',
	data(){
		return{
			edit:{},
			search:''
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
				url:'room/editRoom',
				data:{
					roomID:this.edit.roomID,
					roomState:this.edit.roomState,
					moeny:this.edit.moeny,
					mask:this.edit.mask,
					BuildingNum:this.edit.BuildingNum,
					QuantityOfElectricity:this.edit.QuantityOfElectricity,
					BuildingFloorID:this.edit.BuildingFloorID
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