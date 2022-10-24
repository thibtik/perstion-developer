import Vue from "vue";
import Vuex from "vuex";

// import translation from "./modules/translation";
 import home from "./modules/home";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  
    home,
  
  },
});
