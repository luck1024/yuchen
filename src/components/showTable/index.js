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
		showParms:{
			type:Object
		},
		reset:{
			type:Boolean
		}
	},
	created(){
		this.getData=()=>{
		let data=this.showParms.data;
		data.search=this.search;
		data.pageIndex=this.pageIndex;
		data.pageSize=this.pageSize;
		
		this.$request.request({
			url:this.showParms.url,
			data
			
			}).then(r=>{
			this.count=r.count;
			this.showData=r[this.showParms.dataKey];
				
			
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