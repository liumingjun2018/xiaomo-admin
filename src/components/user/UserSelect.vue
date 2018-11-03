<template>
  <div class="container" style="margin-top:30px">
    <div class="row">
      <div>
        <div class="row">
          <div class="col-xs-4 col-xs-push-8" style="margin: 40px 0">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入用户手机号" v-model="userPhone">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="search">查询</button>
      </span>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <tr>
          <th>用户编号</th>
          <th>手机号</th>
          <th>用户名</th>
          <th>邮箱</th>
          <th>真实姓名</th>
          <th>身份证号</th>
          <th>性别</th>
          <th>出生日期</th>
          <th>地址</th>
          <th>注册时间</th>
          <th>邀请码</th>
        </tr>
        <tbody>
        <tr v-for="(user,index) in users">
          <td>{{user.uId}}</td>
          <td>{{user.uPhone}}</td>
          <td>{{user.uName}}</td>
          <td>{{user.uEmail}}</td>
          <td>{{user.uTrueName}}</td>
          <td>{{user.uCardId}}</td>
          <td>{{user.uSex}}</td>
          <td>{{user.uBirth}}</td>
          <td>{{user.uLocation}}</td>
          <td>{{user.uRegisterTime}}</td>
          <td>{{user.uInviteCode}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userSelect",
    data(){
      return{
        users:[],
        userPhone:'',
        uId:'',
      }
    },
    methods:{
      search:function () {
        this.$axios.get(`/userorderdis/checkphone/${this.userPhone}`).then((result)=>{
          this.users = result.data.data
          console.log(this.users)
        })
      }
    },
    mounted:function () {
      this.$axios.get("/userorderdis/getalluser").then((result)=> {
        this.users = result.data.data;
        console.log(this.users)
      },(err) =>{
      })
    },
  }
</script>

<style scoped>

</style>
