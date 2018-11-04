<template>
  <div>
    <nav class="navbar navbar-fixed-top" style="background-color: black">
      <div class="navbar-header">
        <ul class="navbar-brand logo" href="#">
          <router-link to="/" tag="li" style="margin-top:-6px;"><img src="../assets/logo.png">
            <span style="margin-top:6px;margin-left:9px;position:absolute;">小沫</span>
          </router-link>
          <router-link to="/" tag="li"><span style="margin-left:6px ">居住极简主义</span></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right" style="margin-left: 300px" href="#">
          <router-link to="/" v-if="getName == null" tag="li"><span class="glyphicon glyphicon-log-in"></span>&nbsp;登录</router-link>
          <router-link to="/orderselect" v-if="getName != null" tag="li">订单的操作</router-link>
          <router-link to="/orderselect" v-if="getName != null" tag="li">房源的操作</router-link>
          <router-link to="/userselect" v-if="getName != null" tag="li">用户的操作</router-link>
          <router-link to="/assessmentselect" v-if="getName != null" tag="li">评价的操作</router-link>
          <router-link to="/diaryselect" v-if="getName != null" tag="li">日记的操作</router-link>
          <router-link to="" v-if="getName != null" tag="span" class="hello-user" style="color: #FF666A">欢迎&nbsp;&nbsp;{{getName}}</router-link>
          <a v-if="getName != null" tag="span"  @click="cleanUser" class="hello-user" style="margin-left: 10px"><span class="glyphicon glyphicon-log-out"></span>&nbsp;退出</a>
        </ul>
      </div>
      <!--</div>-->
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Home",
    computed:{
      getName(){
        return sessionStorage.getItem('aname')
      }
    },
    methods:{
      cleanUser(){
        sessionStorage.clear();
        // this.$router.push({path:'/login'})
        window.location.href='http://localhost:8080/login';
      },
    },
  }
</script>

<style scoped>
  *  *{margin: 0;padding: 0;}
  img{
    width: 30px;
    height: 30px;
  }

  .logo li{
    color: white;
    cursor: pointer;
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-family: "楷体";
    font-size: 19px;
    float: left;
  }
  .navbar-right li{
    color: white;
    cursor: pointer;
    width: 120px;
    height: 60px;
    /*color: rgba(0, 0, 0, 0.7);*/
    line-height: 60px;
    text-align: center;
    font-size: 15px;
    float: left;
  }
  .logo li+li:hover{
    color: #FF666A;
  }
  .navbar-right li:hover{
    color:#ff666a;
  }
  .hello-user{
    padding-left: 10px;
    font-size: 15px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: white;
    /*color:rgba(0, 0, 0, 0.7);*/
  }
  .hello-user:hover{
    cursor: pointer;
    color: #ff666A;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    margin-top: 15px;
  }
  @media (max-width: 992px) {
    .navbar-right li{
      display: none;
    }
  }
</style>
