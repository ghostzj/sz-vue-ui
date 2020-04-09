import TabPane from './src/index';

TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};

export default TabPane;
