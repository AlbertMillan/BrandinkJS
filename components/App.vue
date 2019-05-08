<template>
    <div>
        <contact-header></contact-header>

        <!-- <navigation-bar v-bind:scroll="scrollPosition"></navigation-bar> -->
        <navigation-bar></navigation-bar>


        <shop></shop>

        <contact-footer></contact-footer>

        <reviews></reviews>

        <!-- <router-view/> -->

        <!-- <footer>
            <div class="contact-info--foot"></div>

            <div class="information"></div>

            <div class="reviews"></div>
        </footer>  -->
    </div>
    <!-- <div>Hello</div> -->
</template>

<script>
import ContactHeader from './Contact.head.vue';
import NavigationBar from './Navigation.vue';
import Shop from './Shop.vue';
import ContactFooter from './Contact.foot.vue';
import Reviews from './Reviews.vue';



export default {

    components: {
        ContactHeader,
        NavigationBar,
        Shop,
        ContactFooter,
        Reviews
    },

    // data () {
    //     return {
    //         scrollPosition: 0
    //     }
    // },
    // methods: {
    //     handleScroll: function(event) {
    //         this.scrollPosition = document.documentElement.scrollTop;
    //     }
    // },
    // created: function() {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // destroyed: function() {
    //     window.removeEventListener('scroll');
    // }
}
</script>

