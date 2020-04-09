import Tree from './src/index';

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
