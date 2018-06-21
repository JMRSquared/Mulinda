// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueTyperPlugin from 'vue-typer'
import VueParallaxJs from 'vue-parallax-js'
import VueSticky from 'vue-sticky'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
import "materialize-css/dist/css/materialize.min.css";
var materialize = require("materialize-css/dist/js/materialize.min.js");

Vue.use(VueTyperPlugin);
Vue.use(VueParallaxJs);
Vue.use(VueCarousel);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  directives: {
    'sticky': VueSticky,
  },
  components: {
    App
  },
  template: "<App/>"
});
