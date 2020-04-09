import MenuItem from './src/index';

MenuItem.install = function(Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
