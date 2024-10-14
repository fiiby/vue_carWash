import { createRouter, createWebHistory } from 'vue-router'
import HomeComponents from '@/components/HomeComponents.vue'
import About from '@/components/About.vue'
import Services from'@/components/ServicesComponent.vue'
import ContactUs from '@/components/ContactUs.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import serviceDetails from '@/components/serviceDetails.vue'
import interiorDetails from '@/components/interiorDetails.vue'
import fullCarWash from '@/components/fullCarWash.vue'
import paintProtection from '@/components/paintProtection.vue'
import ceramicCoating from '@/components/ceramicCoating.vue'
import windowTinting from '@/components/windowTinting.vue'



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
      name: 'servicesComponnent',
      component: ServicesComponent
    },

    {
      path: '/contactUs',
      name: 'contact us',
      component: ContactUs
    },
    {
      path: '/serviceDetails',
      name: 'serviceDetails',
      component: serviceDetails
    },
    {
      path: '/interiorDetails',
      name: 'interiorDetails',
      component: interiorDetails
    },
    {
      path: '/fullCarWash',
      name: 'fullCarWash',
      component: fullCarWash
    },
    {
      path: '/paintProtection',
      name: 'paintProtection',
      component: paintProtection
    },
    {
      path: '/ceramicCoating',
      name: 'ceramicCoating',
      component: ceramicCoating
    },
    {
      path: '/windowTinting',
      name: 'windowTinting',
      component: windowTinting
    }
  ]
})

export default router
