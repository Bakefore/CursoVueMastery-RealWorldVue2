import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import BaseIcon from "@/components/BaseIcon";
import "nprogress/nprogress.css";
import Vuelidate from "vuelidate";
import DateFilter from "./filters/date";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.filter("date", DateFilter);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BaseIcon,
  render: (h) => h(App),
}).$mount("#app");
