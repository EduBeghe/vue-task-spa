<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" >
                <a class="nav-link" v-bind:class="{'active':actual_tab === 'manager'}">+</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>

		<div class="tabContainer">
			<tabs-creator v-if="actual_tab === 'manager'"></tabs-creator>
		</div>

	</div>
</template>
<script>
	import TabsCreator from './TabsCreator';

    export default {
        name: 'TabsManager',
        data () {
            return {
                actual_tab: 'manager'
            }
        },
		components: {
			TabsCreator
		}
    }
</script>
<style scoped>
	.tabContainer {
		padding-top: 30px;
		padding-bottom: 30px;
		width: 20%;
		margin: 0 auto;
		text-align: left;
	}
</style>
