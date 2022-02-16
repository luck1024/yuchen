export default [
	{
		path:'/',
		redirect:'/login' //如果没有请求路径，则跳转到登录也没
	},
	{
		path: '/login',
		name:'login',
		component: () => import('views/login/login.vue'),
		meta: {
			title: '系统登录'
		}

	},
	{
		path: '/home',
		name:'home',
		component: () => import('views/home/home/home.vue'),
		meta: {
			title: '系统首页'
		},
		children:[
			{
			path:'index',
			name:'index',
			component: () => import('views/home/index/index.vue'),
			meta: {
				title: '系统首页'
		}
	}
	
	]
	},
	{
		path: '/room',
		name:'room',
		component: () => import('views/home/home/home.vue'),
		meta: {
			title: '系统首页'
		},
		children:[
			{
			path:'building',
			name:'building',
			component: () => import('views/room/building/searchbuilding/searchbuilding.vue'),
			meta: {
				title: '楼栋管理'
		}
	},
	{
			path:'floor',
			name:'floor',
			component: () => import('views/room/floor/searchfloor/floor.vue'),
			meta: {
				title: '楼层管理'
		}
	},
	{
			path:'room',
			name:'room',
			component: () => import('views/room/room/searchroom/room.vue'),
			meta: {
				title: '房间管理'
		}
	}
	
	
	]
	},
	{
		path: '/electric',
		name:'electric',
		component: () => import('views/home/home/home.vue'),
		meta: {
			title: '系统首页'
		},
		children:[
			{
			path:'payMoney',
			name:'payMoney',
			component: () => import('views/electric/payMoney/payMoney.vue'),
			meta: {
				title: '电费充值'
		}
	},
	{
			path:'QuantityOfElectricity',
			name:'QuantityOfElectricity',
			component: () => import('views/electric/QuantityOfElectricity/QuantityOfElectricity.vue'),
			meta: {
				title: '房间电费'
		}
	}
	
	]
	}
	
	
	
]
//到处配置路由规则
