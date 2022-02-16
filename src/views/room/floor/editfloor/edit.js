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
				url:'room/editFloor',
				data:{
					BuildingFloorID:this.edit.BuildingFloorID,
					BuildingFloorNum:this.edit.BuildingFloorNum,
					BuildingFloorName:this.edit.BuildingFloorName,
					BuildingID:this.edit.BuildingID
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