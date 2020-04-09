## Installation

### npm

```shell
npm i sz-vue-ui -S
```

### Fully import

```javascript
import Vue from 'vue';
import SzVueUI from 'sz-vue-ui'
import 'sz-vue-ui/lib/sz-vue-ui.css'
import App from './App.vue';

Vue.use(SzVueUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
