import Button from './src/index';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
