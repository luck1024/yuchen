import vueRouter from 'vue-router' //导入路由模块
import Vue from 'vue' //导入vue
import routes from './routes/routes.js'
import store from '../stroe/store.js'
Vue.use(vueRouter);
const vuerouter = new vueRouter({
    mode:'history',//路由方式
	routes //利用es6新特性,等效于 routes:routes
});

vuerouter.beforeEach((to,from,next)=>{
	if(to.path !='/login'){
		if(store.state.user==undefined ||store.state.user ==undefined==null || store.state.user.key==undefined
		 ||store.state.user.key=='')
		 {
			 vuerouter.replace('/login');
		 }
	}
	
	document.title=to.meta.title;
	next();
	
});//导航生效之前的守卫，
//可以在这里进行导航跳转拦截，比如说A跳转B，B需要特定权限，则可以再此处检查条件是否满足
vuerouter.afterEach((to,from)=>{
	
	
});//导航生效之后的守卫

export default vuerouter //导出router