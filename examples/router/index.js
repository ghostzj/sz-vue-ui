import Vue from 'vue';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import ComponentRoute from './component-route';
// import Guide from '../pages/guide.vue';
import MainComponent from '../pages/component.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'guide',
  //   component: Guide
  // },
  {
    path: '/',
    name: 'component',
    component: MainComponent,
    redirect: '/button',
    children: ComponentRoute
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
})

export default router
