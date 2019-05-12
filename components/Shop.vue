<template>
    <div class="shop-body">
        <div class="space"></div>
        <div class="container">
            <Menu></Menu>
        </div>
        
        <!-- <div class="shop-container">
            <Menu v-bind:currentTitle.sync="currentTitle"></Menu> 
            <Menu></Menu>

            <Items v-bind:title.sync="currentTitle"></Items> 

        </div> -->
    </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
    components: {
        Menu,
    },
    data() {
        return {
            currentTitle: 'Todos los productos'
        }
    }
}

</script>


<style lang="stylus" scoped>
.shop-body
    background-color #f8f8f8
    display inline-block
    width 100%
    padding-bottom 5%

.space
    height 4em
    display block

.container
    display block
    
</style>
