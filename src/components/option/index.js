import Option from './src/index';

Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};

export default Option;
