import Vue from 'vue/dist/vue.esm';
import Router from './router/router';
import Store from './store/store';
import Header from './components/header.vue';
import * as  Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Bootstrap)

const app = new Vue({
    router: Router,
    store: Store,
    el: '#app',
    components: {
        'nav-bar': Header
    }
})