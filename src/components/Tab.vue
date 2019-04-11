<template>
	<div v-bind:class="tabClass" class="tab-height">
		<div class="form-group">
			<label for="new_title">Title</label>
			<input type="text" class="form-control" id="new_title" placeholder="Enter Title" v-model="title" disabled>
		</div>
		<div class="form-group">
			<label for="new_service">Service</label>
			<input type="text" class="form-control" id="new_service" v-model="service" disabled>
		</div>
		<div class="form-group">
			<label for="new_quantity">Quantity</label>
			<input type="number" class="form-control" id="new_quantity" v-model="quantity" disabled>
		</div>
		<div class="form-group">
			<label for="new_cost">Unit Cost</label>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">US$</span>
				</div>
				<input type="number" class="form-control" id="new_cost" v-model="unit_cost" disabled>
			</div>
		</div>
		<div class="form-group">
			<label for="new_total">Total Cost</label>
			<input type="number" class="form-control" id="new_total" v-model="total_cost" disabled>
		</div>
		<div class="float-right">
			<button type="submit" class="btn btn-danger" v-on:click="remove">Remove</button>
			<button type="submit" class="btn btn-primary" v-on:click="duplicate">Duplicate</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		props: {
			data: Object
		},
		data() {
			  return {
				  service: null,
				  title: null,
				  quantity: 0,
				  unit_cost: 0
			  }
	  	},
		computed: {
			total_cost: function () {
				return this.quantity * this.unit_cost;
			},
			tabClass: function() {
				switch (this.service) {
					case 'Service 1':
						return 'service_1';
					case 'Service 2':
						return 'service_2';
					case 'Service 3':
						return 'service_3';
				}
			}
		},
		methods: {
			remove() {
				this.$emit('remove');
			},
			duplicate() {
				this.$emit('duplicate');
			}
		},
		mounted() {
			if (this.data) {
				this.service = this.data.service;
				this.title = this.data.title;
				this.quantity = this.data.quantity;
				this.unit_cost = this.data.unit_cost;
			}
		}
	}
</script>

<style scoped>
	.service_1 {
		background-color: aliceblue;
		padding: 10px;
	}
	.service_2 {
		background-color: antiquewhite;
		padding: 10px;
	}
	.service_3 {
		background-color: cornsilk;
		padding: 10px;
	}
	.tab-height {
		height: 500px;
	}
</style>
