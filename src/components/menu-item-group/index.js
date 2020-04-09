import MenuItemGroup from './src/index';

MenuItemGroup.install = function(Vue) {
  Vue.component(MenuItemGroup.name, MenuItemGroup);
};

export default MenuItemGroup;
