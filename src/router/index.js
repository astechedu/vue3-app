import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/Index.vue'
import Contact from '@/components/Contact.vue'
import Register from '@/components/Register.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },  
   {
    path: '/ajay',
    name: 'Ajay',
    component: Ajay
  },  
]
const router = createRouter({ history: createWebHistory(), routes })
export default router