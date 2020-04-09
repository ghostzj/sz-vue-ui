import Tag from './src/index';

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
