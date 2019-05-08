<template>
    <div class="shop-container">
        <div class="shop-menu">
            <div class="menu-title">
                <h1>Tienda</h1>
            </div>
            <ul>
                <li 
                    v-for="product in products" 
                    v-bind:key="product.id" 
                    v-on:click="selectedItem = product.id"
                    v-bind:class="{ active : (selectedItem == product.id)}"
                >{{ product.category }}
                </li>
            </ul>
        </div>
        <Items v-bind:option="products[selectedItem-1]"></Items>
    </div>
</template>

<script>

import Items from './Item.list.vue';



export default {
    components: {
        Items,
    },
    data() {
        return {
            selectedItem: 1,
            products: [
                { id: 1, category: 'Todos los productos'},
                { id: 2, category: 'Camisetas'},
                { id: 3, category: 'Sudaderas'},
                { id: 4, category: 'Polos'},
                { id: 5, category: 'Accesorios'}
            ]
        }
    },
    // computed: {
    //     updateTitle: function() {
    //         this.title = this.products[this.selectedItem-1].category;
    //         console.log(this.title);
    //         return this.title;
    //     }
    // }
}

</script>


<style lang="stylus" scoped>
.shop-container
    height auto 
    width auto 
    padding-left 80px
    padding-right 80px
    display flex

.shop-menu
    width 30%
    max-width 375px
    float left


ul
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family "Open-Sans--Regular"

li
    display block
    padding-bottom 1.5em
    cursor pointer

.active
    font-weight bold


h1
    font-family "Open-Sans--Semibold"
    font-size 2.5em
    margin-block-start 0.5em
    margin-block-end 1.5em
    
</style>
