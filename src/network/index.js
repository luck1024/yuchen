import axios from 'axios'
import store from '../stroe/store.js'
import qs from 'qs' //格式化发送参数'Content-Type': 'application/x-www-form-urlencoded'

//如果要以此格式发送的必须使用该对象中的stringify方法格式化参数
const baseURL = "http://139.196.197.158/api/";
export default {
	request(config) {
		if (config.method == undefined || config.method == "post") { //判断是否是post请求
			config.method = "post";
			config.headers = {
				'Content-Type': 'application/x-www-form-urlencoded' //添加请求头部信息
			};
		}

		if (store.state.user == undefined || store.state.user.key == undefined || store.state.user.key == "")
			config.data.key == "";
		else
			config.data.key = store.state.user.key;


		const service = axios.create({
			baseURL: baseURL, //拆解url，基础url
			timeout: 5000,
		});
		//请求拦截器
		service.interceptors.request.use(config => {
			if (config.method === 'post') {
				config.data = qs.stringify(config.data); //使用querystring格式化参数
			}
			if (config.method == 'get') {
				config.params = params;
			}
			return config;
		}, error => {
			return Promise.reject(error)
		});
		//响应拦截器
		service.interceptors.response.use(response => {
			return response.data;
		}, error => {
			if (error.response.data.code == 500) {

			}
			return Promise.reject(error)
		});
		return service(config);

	}
}
