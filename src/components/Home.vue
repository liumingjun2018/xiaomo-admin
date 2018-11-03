<template>
    <div>
      <h1 style="text-align: center;margin-top: 120px">欢迎来到小沫短租的后台管理系统</h1>
      <div style="text-align: center;margin-top: 200px">
        <router-link to="/orderselect"><button class="btn btn-primary">订单的操作</button></router-link>
        <router-link to="/orderselect"><button class="btn btn-primary">房源的操作</button></router-link>
        <router-link to="/userselect"><button class="btn btn-primary">用户的操作</button></router-link>
        <router-link to="/assessmentselect"><button class="btn btn-primary">评价的操作</button></router-link>
        <router-link to="/diaryselect"><button class="btn btn-primary">日记的操作</button></router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
.btn{
  margin-left: 20px;
}
</style>
