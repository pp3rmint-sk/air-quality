import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import Home from '@/components/pages/Home'
import Admin from '@/components/pages/Admin'
import Login from '@/components/pages/Login'
import CreateAccount from '@/components/pages/CreateAccount'

import { auth } from "@/firebase";


Vue.use(VueRouter);
Vue.use(VueHead);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: Admin,
    meta: { needAuth: true}
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/create-account',
    component: CreateAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

//creation routes guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser;
  const isProtected = to.matched.some(route=>route.meta.needAuth)

  //si l'utilisateur n'est pas connecté et que la route est protégée, redirige vers la page login
  if (!isAuthenticated && isProtected) {
      next("/login")
  } else {
    next() //continue sa route
  }
});



new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  router
}).$mount('#app')
