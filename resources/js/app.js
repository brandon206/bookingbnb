require('./bootstrap')

import router from './routes';
import VueRouter from 'vue-router';
import Index from './Index';
import moment from 'moment';

import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";
import Success from "./shared/components/Success";
import ValidationErrors from "./shared/components/ValidationErrors";

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("StarRating", StarRating);
Vue.component("FatalError", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    },
});