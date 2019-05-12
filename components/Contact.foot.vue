<template>
    <div class="contact-body">
        <div class="container">
            <div class="text-container">
                <div class="sub-text">
                    <h3>Escribanos a:</h3>
                </div>
                <div>
                    <h1>hola@brandink.es</h1>
                </div>
            </div>
            <div class="text-container">
                <div class="sub-text">
                    <h3>Llamenos gratis al:</h3>
                </div>
                <div>
                    <h1>+34 615 641 666</h1>
                </div>
            </div>
            <div class="text-container">
                <div class="sub-text">
                    <h3>Te llamamos nosotros</h3>
                </div>
                <div>
                    <!-- <button class="white-box" v-on:click="$emit('show', true)">LLAMADME AHORA</button> -->
                    <button class="white-box" v-on="$listeners">LLAMADME AHORA</button>
                    <!-- <button class="white-box" v-on:click="hello()">LLAMADME AHORA</button> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    // data() {
    //     return {
    //         showModal: false
    //     }
    // }
    // methods: {
    //     hello: function() {
    //         console.log('Hello');
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
 .contact-body
    display block
    width 100%
    height auto
    background-color #312f42
    font-family "Open-Sans--semibold"

.container
    margin 6em 0em
    color white
    display inline-flex
    width 100%
    justify-content space-around

.sub-text 
    text-align center

.white-box
    width 100%
    cursor pointer
    background-color transparent
    color white
    font-family "Open-Sans--semibold"
    letter-spacing 1.3px
    font-size 18px
    padding 12px 13px
    border-width 4px
    border-style solid 
    border-color white
    border-image none 

.white-box:active
    transform translateY(4px)

.white-box:focus
    outline none 

</style>


