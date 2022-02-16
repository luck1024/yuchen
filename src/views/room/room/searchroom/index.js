import maskDiv from '../../../../components/mask/mask.vue'
import edit from '../editroom/edit.vue'
import filters from '../../../../filters/index.js'
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
			showdata: [],
			building: [],
			BuildingFloor: [],
			BuildingIndex: 0,
			BuildingFloorIndex: 0,



		};
	},
	created() {

		this.$request.request({
			url: 'room/getAllBuidingAndFool',
			data: {}
		}).then(r => {
			if (r.result)
				this.building = r.building;
			this.BuildingFloor = this.building[0].BuildingFloor;
			if (this.building.length > 0)
				this.getData();

		});


		this.getData = () => {

			this.$request.request({
				url: 'room/searchRoom',
				data: {
					search: this.search,
					pageIndex: this.pageIndex,
					pageSize: this.pageSize,
					BuildingFloorID: this.building[this.BuildingIndex].BuildingFloor[this.BuildingFloorIndex].BuildingFloorID

				}
			}).then(r => {
				if (r.result) {
					this.showdata = r.rooms;
					this.count = r.count;

				}
			})
		}




	},
	methods: {

		add() {
			this.edit = {
				roomID: 0,
				roomState: 0,
				moeny: 0,
				mask: '',
				BuildingNum: '',
				QuantityOfElectricity: 0,

				building: this.building,
				BuildingFloor: this.building[this.BuildingIndex].BuildingFloor,
				BuildingID: this.building[this.BuildingIndex].BuildingID,
				BuildingFloorID: this.building[this.BuildingIndex].BuildingFloor[this.BuildingFloorIndex].BuildingFloorID

			}
			this.action = !this.action;
		},
		cancel(t) {
			// if (t) this.getData();
			this.getData();
			this.action = false;
		},
		update(i) {
			i.building = this.building;

			i.BuildingFloor = this.building[this.BuildingIndex].BuildingFloor,
				this.edit = i;
			this.action = !this.action;
		}


	},

	components: {
		maskDiv,
		edit
	},
	filters
}
