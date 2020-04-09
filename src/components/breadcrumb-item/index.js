import BreadcrumbItem from './src/index';

BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
