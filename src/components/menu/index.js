import Menu from './src/index';

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;
