import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'

import UserSignup from '@/components/UserSignup.vue'
import SeeProfile from '@/components/SeeProfile.vue'
import UserLogin from '@/components/UserLogin.vue'
import ContactUs from '@//components/ContactUs.vue'
import JournalEntry from '@/components/JournalEntry.vue'
import NewEntry from '@/components/NewEntry.vue'
import UserLogout from '@/components/UserLogout.vue'
import CalanderView from '@/components/CalanderView.vue'
import DeleteAcct from '@/components/DeleteAcct.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component : HomePage
  },
  {
    path: '/signup',
    component : UserSignup
  },
  {
    path: '/profile',
    component: SeeProfile
  },
  {
    path: '/login',
    component: UserLogin
  },
  {
    path: '/contact',
    component: ContactUs
  },
  {
    path: '/journal',
    component: JournalEntry
  },
  {
    path: '/new-entry',
    component: NewEntry
  },
  {
    path: '/logout',
    component: UserLogout
  },
  {
    path: '/CalanderView',
    component: CalanderView
  },
  {
    path: '/delete-acct',
    component:DeleteAcct
  }
]

const router = new VueRouter({
  routes
})

export default router
