import Tooltip from './src/index';
Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
};
export default Tooltip;
