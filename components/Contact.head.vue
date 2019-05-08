<template>
    <header>
        <div class="contact-info--header">
            <!-- <h1>Hello world</h1> -->
            <div class="contact-info--phone--container">
                <span class="contact-info--header--text">LLamenos gratis al: <span>+34 615 541 666</span></span>
            </div>
            <div class="contact-info--phone--container">
                <span class="contact-info--header--text">Escribanos a: <span>hola@brandink.es</span></span>
            </div>
        </div>
    </header>
</template>


<script>
// export default {
//     data() {
//         return {
//             title: 'sheit'
//         }
//     }
// }
</script>

<style lang="stylus" scoped>
.contact-info--header
    z-index 100
    padding-left: 80px
    position relative
    display block
    background-color #312F42
    color white
    width auto
    height: 100%
    transition: all .3s ease;
    font-family: "Open-Sans--regular";
    // font-size: 13px

.contact-info--phone--container
    display inline-block
    width 30%

.contact-info--header--text
    display: block;
    font-size: 1.0em;
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
    font-weight: bold;

span 
 font-weight: normal;
 

</style>


