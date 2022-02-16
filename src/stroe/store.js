import Vue from "vue"
import Vuex from 'vuex'


Vue.use(Vuex);

import state from './state/index.js'
import actions from './actions/index.js'
import mutations from './mutation/index.js'
import getters from './getters/index.js'

const store = new Vuex.Store({
	state,//状态，
		
	actions,//异步刷新
	mutations,//改变
	getters//过滤
	// modules:[//子仓库
	// ]
	
	
});

export default store