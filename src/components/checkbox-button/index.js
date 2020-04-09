import CheckboxButton from './src/index';

CheckboxButton.install = function(Vue) {
  Vue.component(CheckboxButton.name, CheckboxButton);
};

export default CheckboxButton;
