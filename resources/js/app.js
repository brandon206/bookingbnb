require('./bootstrap')

import router from './routes';
import VueRouter from 'vue-router';
import Index from './Index';
import moment from 'moment';

import StarRating from "./shared/components/StarRating";

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("StarRating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    },
});