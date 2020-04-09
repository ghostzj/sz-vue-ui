import Rate from './src/index';

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

export default Rate;
