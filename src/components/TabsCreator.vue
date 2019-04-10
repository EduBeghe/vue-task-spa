<template>
	<div>
		<div class="form-group">
			<label for="new_title">Title</label>
			<input type="text" class="form-control" id="new_title" placeholder="Enter Title" v-model="title">
		</div>
		<div class="form-group">
			<label for="new_service">Service</label>
			<select class="form-control" id="new_service" v-model="service">
				<option v-for="option in options">{{ option }}</option>
			</select>
		</div>
		<div class="form-group">
			<label for="new_quantity">Quantity</label>
			<input type="number" class="form-control" id="new_quantity" v-model="quantity">
		</div>
		<div class="form-group">
			<label for="new_cost">Unit Cost</label>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">US$</span>
				</div>
				<input type="number" min="0.00" step="0.01" class="form-control" id="new_cost" v-model="unit_cost">
			</div>
		</div>
		<div class="form-group">
			<label for="new_total">Total Cost</label>
			<input type="number" class="form-control" id="new_total" v-model="total_cost" disabled>
		</div>
		<div class="float-right">
			<button type="submit" class="btn btn-danger" v-on:click="clear">Clear</button>
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</div>
</template>
<script>
	export default {
  		name: 'TabsCreator',
		data() {
  			return {
  				options: [
  					"Service 1",
					"Service 2",
					"Service 3"
				],
				service: null,
				title: null,
				quantity: 0,
				unit_cost: 0
			}
		},
		computed: {
			total_cost: function () {
				return this.quantity * this.unit_cost;
			}
		},
		methods: {
			clear() {
				this.service = null;
				this.title = null;
				this.quantity = 0;
				this.unit_cost = 0;
			},
			submit() {
				//TODO
			}
		}
  	}
</script>
