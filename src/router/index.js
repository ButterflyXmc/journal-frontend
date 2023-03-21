import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'

import JournalOptions from '@/views/JournalOptions.vue'
import UserSignup from '@/components/UserSignup.vue'
import SeeProfile from '@/components/SeeProfile.vue'
import UserLogin from '@/components/UserLogin.vue'
import ContactUs from '@//components/ContactUs.vue'
import JournalEntry from '@/components/JournalEntry.vue'
import AmEntry from '@/components/AmEntry.vue'
import PmEntry from '@/components/PmEntry.vue'
import UserLogout from '@/components/UserLogout.vue'
import DeleteEntry from '@/components/DeleteEntry.vue'
import EditEntries from '@/components/EditEntries.vue'
import CalanderView from '@/components/CalanderView.vue'



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
    path: '/am',
    component: AmEntry
  },
  {
    path: "/pm",
    component: PmEntry
  },
  {
    path: '/logout',
    component: UserLogout
  },
  {
    path: '/delete-entry',
    component: DeleteEntry
  },
  {
    path: '/edit',
    component: EditEntries
  },
  {
    path: '/options',
    component: JournalOptions
  },
  {
    path: '/CalanderView',
    component: CalanderView
  }
]

const router = new VueRouter({
  routes
})

export default router
