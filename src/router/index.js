import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommender from '../views/Recommender.vue'
import Booking from '../views/Booking.vue'
import NotFound from '../views/NotFound.vue'
import SuccessPayment from '../components/SuccessPayment.vue'
import Instructors from '../views/Instructors.vue'
import FaqAndReviews from '../views/FaqAndReviews.vue'
import AreasCovered from '../views/AreasCovered.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

function prefixRoutes(prefix, routes) {
  return routes.map(route => {
    route.path = prefix + '' + route.path
    return route
  })
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/course-recommender',
    name: 'course-recommender',
    component: Recommender,
    props: true
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
    props: true
  },
  {
    path: '/booking-successful',
    name: 'booking-success',
    component: SuccessPayment,
    props: true
  },

  {
    path: '/instructors',
    name: 'instructors',
    component: Instructors,
    props: true
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqAndReviews,
    props: true
  },
  {
    path: '/areas',
    name: 'areas',
    component: AreasCovered,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
