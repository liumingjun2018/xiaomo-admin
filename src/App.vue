<template>
  <div class="container">
    <app-navigation-top></app-navigation-top>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  import AdminNavigation from '@/components/AdminNavigation.vue'
  import AdminLogin from '@/components/admin/AdminLogin.vue'
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components:{
    'app-navigation-top':AdminNavigation,
    'app-admin-login':AdminLogin,
  },
}
</script>

<style>

</style>
