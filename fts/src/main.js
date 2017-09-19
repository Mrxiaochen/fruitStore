// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import vHeader from './components/public/Header.vue'
import vFooter from './components/public/Footer.vue'

import {Button,Cell} from "mint-ui"
import { Swipe, SwipeItem } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import './base.css'
import './media.less'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button)
Vue.component(Cell.name,Cell)
Vue.component(Loadmore.name, Loadmore);


Vue.component("v-header",vHeader)
Vue.component("v-footer",vFooter)

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
