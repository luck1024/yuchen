import maskDiv from '../../../../components/mask/mask.vue'
import edit from '../editfloor/edit.vue'

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
			building:[],
			BuildingID:0
			
		};
	},
	created() {
		
		this.$request.request({
			url: 'room/getAllBuiding',
			data: {}
		}).then(r => {
			if (r.result) 
				this.building = r.building;
				if(this.building.length>0)
				this.BuildingID=this.building[0].BuildingID;
				this.getData();
		});
		
		
		
		
		
		this.getData = () => {
			this.$request.request({
				url: 'room/searchFloor',
				data: {
					search: this.search,
					pageIndex: this.pageIndex,
					pageSize: this.pageSize,
					BuildingID:this.BuildingID
				}
			}).then(r => {
				if (r.result) {
					this.showdata = r.building;
					this.count = r.count;

				}
			})
		}



		
	},
	methods: {

		add() {
			this.edit = {
				BuildingFloorID:0,
				BuildingFloorNum:'',
				BuildingFloorName:'',
				BuildingID:this.BuildingID,
				building:this.building

			}
			this.action = !this.action;
		},
		cancel(t) {
			// if (t) this.getData();
			this.getData();
			this.action=false;
		},
		update(i){
			i.building=this.building;
			this.edit=i;
			this.action = !this.action;
		}


	},

	components: {
		maskDiv,
		edit
	}
}
