import CascaderPanel from './src/index';

CascaderPanel.install = function(Vue) {
  Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
