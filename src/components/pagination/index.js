import Pagination from './src/index';

Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
