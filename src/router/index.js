import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommender from '../views/Recommender.vue'
import Booking from '../views/Booking.vue'
import NotFound from '../views/NotFound.vue'
import Courses from '../views/booking/Courses.vue'
import EmptyRouterView from '../views/booking/EmptyRouterView.vue'
import PersonalDetailForm from '../views/booking/PersonalDetailForm.vue'
import ConfirmDetail from '../views/booking/ConfirmDetail.vue'

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
  // {
  //   path: '/order/:id',
  //   name: 'Order',
  //   component: Order
  // },

  // prefixRoutes('/courses', [
  //   {
  //     path: '/',
  //     name: 'courses',
  //     component: Courses
  //   },
  //   {
  //     path: '/step1',
  //     name: 'step1',
  //     component: PersonalDetailForm
  //   },
  //   {
  //     path: '/step2',
  //     name: 'step2',
  //     component: ConfirmDetail
  //   }
  // ]),

  // {
  //   path: '/courses',
  //   // name: 'booking',
  //   component: EmptyRouterView,
  //   props: true,
  //   children: [
  //     {
  //       name: 'courses',
  //       path: '',
  //       component: Courses
  //     },
  //     {
  //       name: 'step1',
  //       path: 'step1',
  //       component: PersonalDetailForm
  //     },
  //     {
  //       name: 'step2',
  //       path: 'step2',
  //       component: ConfirmDetail
  //     }
  //     // UserHome will be rendered inside User's <router-view>
  //     // when /user/:id is matched
  //     // { path: '/booking', component: Booking },
  //     // UserProfile will be rendered inside User's <router-view>
  //     // when /user/:id/profile is matched
  //     //   { path: 'step1', component: Courses },
  //     //   { path: 'step2', component: PersonalDetailForm },
  //     //   { path: 'step3', component: ConfirmDetail }
  //   ]
  // },

  // {
  //   path: '/courses',
  //   name: 'courses',
  //   component: Courses,
  //   props: true
  //   // children: [
  //   //   {
  //   //     path: '/step01',
  //   //     name: 'step01',
  //   //     component: PersonalDetailForm,
  //   //     props: true
  //   //   },
  //   //   { path: '/step02', name: 'step02', component: ConfirmDetail, props: true }
  //   // ]
  // },
  // {
  //   path: '/courses/step1',
  //   name: 'step1',
  //   component: PersonalDetailForm,
  //   props: true
  // },
  // {
  //   path: '/courses/step2',
  //   name: 'step2',
  //   component: ConfirmDetail,
  //   props: true
  // },
  //
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
