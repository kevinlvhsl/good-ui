import Button from './button';

const components = [
  Button
];

const install = function (Vue, opts = {}) {
  components.forEach(com => {
    Vue.component(com.name, com);
  })
};

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}
export default {
  Button
};
