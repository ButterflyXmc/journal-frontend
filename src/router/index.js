import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import UserSignup from '@/components/UserSignup.vue'
import SeeProfile from '@/components/SeeProfile.vue'
import UserLogin from '@/components/UserLogin.vue'
import ContactUs from '@//components/ContactUs.vue'
import JournalEntry from '@/components/JournalEntry.vue'




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
  }
]

const router = new VueRouter({
  routes
})

export default router
