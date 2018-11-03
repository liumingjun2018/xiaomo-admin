<template>
  <div class="container">
    <app-navigation-top></app-navigation-top>
    <router-view/>
  </div>
</template>

<script>
  import AdminNavigation from '@/components/AdminNavigation.vue'
  import AdminLogin from '@/components/admin/AdminLogin.vue'
export default {
  name: 'App',
  components:{
    'app-navigation-top':AdminNavigation,
    'app-admin-login':AdminLogin,
  },
}
</script>

<style>

</style>
