import OptionGroup from './src/index';

OptionGroup.install = function(Vue) {
  Vue.component(OptionGroup.name, OptionGroup);
};

export default OptionGroup;
