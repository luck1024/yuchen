import request from '../../network/index.js'

export default{
	resetKey(context){
		request.request({
			url:"login/resetKey",
			data:{}
		}).then(r=>{
			context.commit('resetKey',r.key)
		});
	}
}