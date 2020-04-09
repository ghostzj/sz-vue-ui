import Scrollbar from './src/index';

Scrollbar.install = function(Vue) {
  Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
