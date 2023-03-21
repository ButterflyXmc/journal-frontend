import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import JournalOptions from '@/views/JournalOptions.vue'
import UserSignup from '@/components/UserSignup.vue'
import SeeProfile from '@/components/SeeProfile.vue'
import UserLogin from '@/components/UserLogin.vue'
import ContactUs from '@//components/ContactUs.vue'
import JournalEntry from '@/components/JournalEntry.vue'
import NewEntry from '@/components/NewEntry.vue'
import UserLogout from '@/components/UserLogout.vue'
import DeleteEntry from '@/components/DeleteEntry.vue'
import EditEntries from '@/components/EditEntries.vue'


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
    path: '/new-journal',
    component: NewEntry
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
  }
]

const router = new VueRouter({
  routes
})

export default router
