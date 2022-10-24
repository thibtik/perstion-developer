import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import 'bootstrap';
import AOS from 'aos';

import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

//= ========= ALl Plugin and Component  ============//
import {
  LayoutPlugin,
  ImagePlugin,
  ToastPlugin,
  ModalPlugin,
  BootstrapVueIcons,
  NavbarPlugin,
  LinkPlugin,
  CardPlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  TabsPlugin,
  TablePlugin,
  BreadcrumbPlugin,
  FormDatepickerPlugin,
  FormSelectPlugin,
  FormPlugin,
  FormInputPlugin,
  FormGroupPlugin,
  PaginationPlugin,
  FormTextareaPlugin,
  FormCheckboxPlugin,
} from 'bootstrap-vue';

// import { mapActions, mapGetters } from 'vuex';
// import { api } from "@core/config";

//= ========= ALl Declare Usage Plugin and Component ============//

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(ImagePlugin);
Vue.use(LinkPlugin);
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(TabsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(TablePlugin);
Vue.use(BreadcrumbPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(PaginationPlugin);

Vue.use(FormTextareaPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(AOS);

Vue.use(CoolLightBox);
//= ========= ALl Style Main and Customize ============//
import './assets/scss/app.scss';
import 'aos/dist/aos.css';

//= ========= Vue Render to Html ============//
new Vue({
  data: {
    loading: false,
    general: {
      settings: {},
      locales: {},
      menus: {},
    },
    appLoading: document.getElementById('loading-bg'),
  },
  metaInfo: {
    title: 'Home',
    // all titles will be injected into this template
    titleTemplate: '%s | ' + 'aditi-asia',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'aditi asia is .',
        id: 'description',
      },
    ],
  },
  
  router,
  store,
  render: (h) => h(App),
  // mounted() {
  //   AOS.init()
  // },
}).$mount('#app');
