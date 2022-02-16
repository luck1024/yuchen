export default{
	name:'showTable',
	data(){
		return{
			pageIndex:1,
			pageSize:10,
			search:'',
			count:0,
			getData:{},
			showData:[]
		};
	},
	props:{
		history:{
			type:Object
		},
		
	},
	created(){
		this.getData=()=>{
		let data=this.history.data;
		data.pageIndex=this.pageIndex;
		data.pageSize=this.pageSize;
		this.$request.request({
			url:this.history.url,
			data
			
			}).then(r=>{
			this.count=r.count;
			this.showData=r[this.history.dataKey];
				
			
		});
		}
		this.getData();
	},
	methods:{
		add(){}
		
	},
	watch:{
		reset(newV ,oldV){
			if(newV!=oldV){
				this.getData();
				this.pageIndex=1;
			}
		}
	}
	
	
	
}