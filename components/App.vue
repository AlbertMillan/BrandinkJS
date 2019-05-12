<template>
    <div>
        <contact-header></contact-header>

        <!-- <navigation-bar v-bind:scroll="scrollPosition"></navigation-bar> -->
        <navigation-bar></navigation-bar>

        <modal v-if="showModal" @close="showModal = false"></modal>

        <router-view/>
        <!-- <shop></shop> -->

        <contact-footer @click="callButtonClicked"></contact-footer>

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
// import Shop from './Shop.vue';
import ContactFooter from './Contact.foot.vue';
import Reviews from './Reviews.vue';
import Modal from './Menu.modal.vue';



export default {

    components: {
        ContactHeader,
        NavigationBar,
        // Shop,
        ContactFooter,
        Reviews,
        Modal
    },
    data () {
        return {
            showModal: false
        }
    },
    methods: {
        callButtonClicked: function() {
            this.showModal = true;
        }
    }

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

