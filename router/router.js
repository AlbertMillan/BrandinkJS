import Vue from 'vue';
import Router from 'vue-router';
import Shop from './../components/Shop.vue';
import Help from './../components/Help.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        }
    ]
})
