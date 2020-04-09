import Submenu from './src/index';

Submenu.install = function(Vue) {
  Vue.component(Submenu.name, Submenu);
};

export default Submenu;
