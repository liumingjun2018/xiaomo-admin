import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '@/components/admin/AdminLogin.vue'
import Home from '@/components/Home.vue'
import OrderSelect from '@/components/order/OrderSelect.vue'
import UserSelect from '@/components/user/UserSelect.vue'
import AssessmentSelect from '@/components/assessment/AssessmentSelect.vue'
import DiarySelect from '@/components/diary/DiarySelect.vue'
import AdminNavigation from '@/components/AdminNavigation.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',component: AdminLogin},
    {path: '/home',component: Home},
    {path: '/orderselect',component: OrderSelect},
    {path: '/userselect',component: UserSelect},
    {path: '/assessmentselect',component: AssessmentSelect},
    {path: '/diaryselect',component: DiarySelect},
    {path: '/adminnavigation',component: AdminNavigation},
  ]
})
