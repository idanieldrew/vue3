import { auth } from '@/store/auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import { createPinia, mapState } from 'pinia';
import { createApp } from 'vue';
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      authRedirect: true
    }
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/',
    name: 'Posts',
    component: () => import( '../views/Posts.vue')
  },

  {
    path: '/:post',
    name: 'Post',
    component: () => import( '../views/Post.vue')
  },

  {
    path: '/update/:name',
    name: 'Update',
    component: () => import('../views/Update.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = auth()
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.isRegister) {
      next({ name: 'Register' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.authRedirect)) {
    if (!store.isRegister) {
      next()
    } else {
      next({name:"About"})
    }
  }
  else {
    next()
  }
})

export default router