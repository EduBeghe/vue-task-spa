<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" >
                <a class="nav-link" v-bind:class="{'active':actual_tab === 'manager'}" v-on:click="actual_tab = 'manager'">+</a>
            </li>
            <li class="nav-item" v-for="(tab,index) in tabs">
                <a class="nav-link" v-on:click="actual_tab = index">{{ tab.title }} - {{ tab.quantity * tab.unit_cost }}</a>
            </li>
        </ul>

		<div class="tabContainer">
			<tabs-creator v-if="actual_tab === 'manager'" @created="updateTabs"></tabs-creator>
			<tab v-if="actual_tab === index" v-for="(tab,index) in tabs" :data="tab" :key="index" @duplicate="duplicate(index)" @remove="remove(index)"></tab>
		</div>

	</div>
</template>
<script>
	import TabsCreator from './TabsCreator';
	import Tab from './Tab';

    export default {
        name: 'TabsManager',
        data () {
            return {
                actual_tab: 'manager',
				tabs: []
            }
        },
		components: {
			TabsCreator,
			Tab
		},
		methods: {
			updateTabs() {
				this.tabs = JSON.parse(localStorage.getItem('tabs'));
				console.log(this.tabs);
			},
			duplicate(index) {
				this.tabs = JSON.parse(localStorage.getItem('tabs'));
				this.tabs.push(this.tabs[index]);
				this.saveTabs();
			},
			remove(index) {
				this.tabs.splice(index, 1);
				this.saveTabs();
				this.actual_tab = 'manager';
			},
			saveTabs() {
				const parsed = JSON.stringify(this.tabs);
				localStorage.setItem('tabs', parsed);
				this.updateTabs();
			}
		},
		mounted() {
			if (localStorage.getItem('tabs')) {
				this.updateTabs();
			}
		},
    }
</script>
<style scoped>
	.tabContainer {
		padding: 30px;
		width: 25%;
		margin: 0 auto;
		text-align: left;
	}
</style>
