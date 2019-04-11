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
		},
		created() {
			this.$toastr('success', 'i am a toastr success', 'hello')
		}
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
