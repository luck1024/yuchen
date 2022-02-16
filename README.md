# default

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

http://139.196.197.158
用户名：qingjingzehui
密码：12345678

### Customize configuration
See [](https://cli.vuejs.org/config/).





相关代码
	创建（）{
		
		this.showParms={
			url:'room/searchRoom',
			data:{
				BuildingFloorID:0

			},
			dataKey:'rooms',
			thead:[
				{
					key:'BuildingName',
					name:'楼栋名称'
				},
				{
					key:'BuildingFloorName',
					name:'楼层名称'
				},
				{
					key:'BuildingNum',
					name:'房间编号'
				},
				{
					key:'moeny',
					name:'余额'
				},
				{
					key:'QuantityOfElectricity',
					name:'电费度数'
				},
				{
					key:'state',
					name:'房间状态'
				}
				
			],
			action:[
				{
					key:'payMoney',
					name:'电费充值'
				},
				{
					key:'history',
					name:'充值记录'
				}
			]
		},
		
	
		this.$request.request({
			url: 'room/getAllBuidingAndFool',
			data: {}
		}).then(r => {
			if (r.result)
				this.building = r.building;
				this.BuildingFloor=this.building [0]. BuildingFloor;
			    this.showParms.data.BuildingFloorID=this.BuildingFloor[0].BuildingFloorID;
		
		        this.reset=!this.reset;
		});
	
	},
	methods:{
		
		showTableClick(playLoad){
			
			if(playLoad.key=='payMoney')
				this.edit=playLoad.playLoad;
			if(playLoad.key=='history')
				this.historyParms={
					url:'room/RechargeRecordRoomID',
					data:{
						roomID:playLoad.playLoad.roomID,
					},
					dataKey:'RechargeRecord',
					thead:[
						{
							key:'BuildingNum',
							name:'房间编号'
						},
						{
							key:'Rechargemoney',
							name:'充值金额'
						},
						{
							key:'userName',
							name:'充值人'
						},
						{
							key:'recredDate',
							name:'充值时间'
						},
						{
							key:'moeny',
							name:'房间余额'
						},
						
						
					]
					
				}
			this.action=playLoad.key;
		},
		cancel(v){
			this.action='';
			this.reset=!this.reset;
		}
	}
}

