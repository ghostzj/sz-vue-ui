import DropdownMenu from './src/index';

DropdownMenu.install = function(Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu);
};

export default DropdownMenu;
