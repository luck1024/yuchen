export default {
	
		saveAge(state,payLoad){
			state.age=payLoad;
		},
		saveUser(state,payLoad){
			state.user=payLoad;
		},
		resetKey(state,payLoad){
			state.key=payLoad;
		},
		exit(state){
			state.user=null;
		}
}