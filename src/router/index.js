import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LogIn from '@/components/LogIn.vue'
import UserSignup from '@/components/UserSignup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component : HomePage
  },
  {
    path: '/login',
    component : LogIn
  },
  {
    path: '/signup',
    component : UserSignup
  },
]

const router = new VueRouter({
  routes
})

export default router
