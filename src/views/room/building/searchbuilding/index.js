import maskDiv from '../../../../components/mask/mask.vue'
import edit from '../editbuilding/edit.vue'

export default {
	name: 'searchbuilding',
	data() {
		return {

			action: false,
			edit: '',
			getData: {},
			search: '',
			pageIndex: 1,
			count: 0,
			pageSize: 10,
			showdata: []
		};
	},
	created() {
		this.getData = () => {
			this.$request.request({
				url: 'room/searchBuilding',
				data: {
					search: this.search,
					pageIndex: this.pageIndex,
					pageSize: this.pageSize
				}
			}).then(r => {
				if (r.result) {
					this.showdata = r.building;
					this.count = r.count;

				}
			})
		}



		this.getData();
	},
	methods: {

		add() {
			this.edit = {
				BuildingName: '',
				BuildingID: 0,
				BuildingNum: ''

			}
			this.action = !this.action;
		},
		cancel(t) {
			if (t) this.getData();
			this.action=false;
		}


	},

	components: {
		maskDiv,
		edit
	}
}
