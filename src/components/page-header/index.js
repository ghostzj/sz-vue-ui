import PageHeader from './src/index';

PageHeader.install = function(Vue) {
  Vue.component(PageHeader.name, PageHeader);
};

export default PageHeader;
