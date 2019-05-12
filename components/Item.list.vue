<template>
    <div class="product-list">
        <div class="product-category--title">
            <h3>{{ option.category }}</h3>
        </div>
        <div class="product-category--items">
            <div class="column">
                <div class="item" 
                 v-for="(product, index) in products" 
                 v-bind:key="index" 
                 v-if="(index % 3) === 0"
                >
                    <!-- <img class="item--image" src="../assets/images/camiseta_cuello_v.png" alt="Camiseta Cuello V"> -->
                    <img class="item--image" :src="imgFileSource + product.url" :alt="product.description">
                    <div class="item--text">
                        <div>
                            <h3>{{ product.name }}</h3>
                        </div>
                        <span>{{ product.description }}</span>
                        <span id="larger">Desde <strong>{{ (product.price).toFixed(2) }}€</strong> / unidad</span>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="item" 
                 v-for="(product, index) in products" 
                 v-bind:key="index" 
                 v-if="(index % 3) === 1"
                >
                    <img class="item--image" :src="imgFileSource + product.url" :alt="product.description">
                    <div class="item--text">
                        <div>
                            <h3>{{ product.name }}</h3>
                        </div>
                        <span>{{ product.description }}</span>
                        <span id="larger">Desde <strong>{{ (product.price).toFixed(2) }}€</strong> / unidad</span>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="item" 
                 v-for="(product, index) in products" 
                 v-bind:key="index" 
                 v-if="(index % 3) === 2"
                >
                    <img class="item--image" :src="imgFileSource + product.url" :alt="product.description">
                    <div class="item--text">
                        <div>
                            <h3>{{ product.name }}</h3>
                        </div>
                        <span>{{ product.description }}</span>
                        <span id="larger">Desde <strong>{{ (product.price).toFixed(2) }}€</strong> / unidad</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    props: ["option"],
    data() {
        return {
            selectedItem: 1,
            // imgFileSource: '../assets/images/',
            imgFileSource: 'assets/images/',
            products: this.getDataParams()
        }
    },
    watch: {
        option: function() {
            console.log(this.option);
            typeof(this.option.id);
            this.getDataParams();
        }
    },
    methods: {
        // call heroku...
        getDataParams: function() {
            // let url = 'https://desolate-chamber-60467.herokuapp.com';
            let url = 'http://localhost:3000'
            let str = (this.option.id === 1) ? '' : this.option.category;
            console.log(str);
            Axios.get(url+'/api/products', {
                params: {
                    category: str
                }
            }).then((response) => {
                console.log(response);
                this.products = response.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
}

</script>


<style lang="stylus" scoped>
.product-list
    width 100%
    height 100%
    display block
    max-width 1300px

.product-category--title
    padding-top 23px
    font-family "Open-Sans--Bold"

.product-category--items
    display flex

.column
    width 33.33%
    margin-right 50px
    
    

.item
    margin 30px 0px
    text-align center
    padding 0px 20px
    background-color white
    // line-height: 0px;
    cursor pointer
    transition all .2s ease-in-out
    animation-name: lightup;
    animation-duration: 3s;

.item:hover
    transform: scale(1.05);
    box-shadow: 0px 5px 12px 5px rgba(0, 1, 1, 0.1);

@keyframes lightup {
    from {opacity: 0;}
    to {opacitiy: 1;}
}

img 
    width 100%

.item--text
    width 100%
    background-color white
    height auto


.item--text h3
    font-size 1.5em
    margin-block-start 0em
    margin-block-end: 0.0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family "Open-Sans--semibold"
    
.item--text span 
    font-size 0.95em
    display block
    padding-bottom 1.2em

#larger
    font-size 1.2em

</style>
