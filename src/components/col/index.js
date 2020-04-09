import Col from './src/index';

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;
