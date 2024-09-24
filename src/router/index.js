import { createRouter, createWebHistory } from 'vue-router'
import HomeComponents from '@/components/HomeComponents.vue'
import About from '@/components/About.vue'
import Services from'@/components/ServicesComponent.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import ContactUs from '@/components/ContactUs.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponents
    },
    {
      path: '/about',
      name: 'about',
      // components: About
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesComponent
    },
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/contactUs',
      name: 'contact us',
      component: ContactUs
    }
  ]
})

export default router
