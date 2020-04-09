import Cascader from './src/index';

Cascader.install = function(Vue) {
  Vue.component(Cascader.name, Cascader);
};

export default Cascader;
