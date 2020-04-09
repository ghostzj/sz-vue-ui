import Switch from './src/index';

Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;
