// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
//vue router setup
import VueRouter from'vue-router'
Vue.use(VueRouter);
import {routes} from "./router/index";
const router = new VueRouter({
  routes,
});
//vuex setup
import Vuex from 'vuex'
Vue.use(Vuex);
import {storage} from "./store/index";
const store = new Vuex.Store(storage);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
