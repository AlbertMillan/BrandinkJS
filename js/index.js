import Vue from 'vue';
import App from './../components/App.vue';
import router from './../router/router.js';
import './../assets/index.css';

// import ContactHeader from './../components/Contact.head.vue';
// import Navigation from './../components/Navigation.vue';
// import Menu from './../components/Menu.vue';
// import ItemList from './../components/Item.list.vue';
// import Reviews from './../components/Reviews.vue';

// Vue.component('header--contact-info', {
//     template: ContactHeader.template
// });

new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: { App },
    render: h => h(App),
    // data: {
    //     showModal:false
    // }
});