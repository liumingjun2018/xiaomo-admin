<template>
  <div class="container">
    <div style="text-align: center;margin-top: 90px">
      <h2 style="margin-top: 30px">管理员登陆界面</h2>
<div class="row">
    <div class="col-xs-4 col-xs-push-4">
  <form>
    <div class="form-group" style="margin-top: 30px;height: 80px">
      <input type="text" class="form-control" id="adminName" placeholder="请输入用户名" v-model="adminName" style="height: 60px">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="adminPwd" placeholder="请输入密码"  v-model="adminPwd" style="height: 60px">
    </div>
    <button type="submit" class="btn btn-default" @click="UserButton" style="margin:50px auto">登录</button>
  </form>
    </div>
  </div>
</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        adminName:'',
        adminPwd:'',
      }
    },
    methods:{
      UserButton() {
        if(this.adminName == ''||this.adminPwd == ''){
          alert('用户名和密码不能为空！')
        }else{
          let _this = this;
          this.$axios.post('/admin/login',
            {
              adminName: _this.adminName,
              adminPwd: _this.adminPwd
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            if (info.code == 200) {
              alert('确认过眼神，你就是我要找的人，恭喜登陆成功！');
              setTimeout(function () {
                _this.$router.replace({path:'/home'})
              }.bind(this), 1000);
              sessionStorage.setItem('aname',info.data.adminName);
              window.location.href = 'http://localhost:8080/home'

            }
            else {
              alert('用户名或密码错误')
            }
          });
        }
      },
    },
  }
</script>
<style scoped>
  /** {*/
    /*box-sizing: border-box;*/
  /*}*/
  /*html,*/
  /*body {*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*height: 100%;*/
  /*}*/
  /*body {*/
    /*font-family: 'Lato', sans-serif;*/
    /*display: -webkit-box;*/
    /*display: -webkit-flex;*/
    /*display: -ms-flexbox;*/
    /*display: flex;*/
    /*-webkit-box-pack: center;*/
    /*-webkit-justify-content: center;*/
    /*-ms-flex-pack: center;*/
    /*justify-content: center;*/
    /*-webkit-box-align: center;*/
    /*-webkit-align-items: center;*/
    /*-ms-flex-align: center;*/
    /*align-items: center;*/
    /*background-color: #2A2A2A;*/
    /*overflow: hidden;*/
  /*}*/
  /*input {*/
    /*font-family: inherit;*/
    /*-webkit-appearance: none;*/
    /*-moz-appearance: none;*/
    /*border: 0;*/
    /*border-bottom: 1px solid #AAAAAA;*/
    /*font-size: 16px;*/
    /*color: #000;*/
    /*border-radius: 0;*/
  /*}*/
  /*input[type="text"],*/
  /*input[type="password"] {*/
    /*width: 40%;*/
    /*height: 40px;*/
  /*}*/
  /*button,*/
  /*input:focus {*/
    /*outline: 0;*/
  /*}*/
  /*::-webkit-input-placeholder {*/
    /*font-size: 16px;*/
    /*font-weight: 300;*/
    /*letter-spacing: -0.00933333em;*/
  /*}*/
  /*.form-group {*/
    /*position: relative;*/
    /*padding-top: 15px;*/
    /*margin-top: 10px;*/
  /*}*/
  /*label {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*opacity: 1;*/
    /*-webkit-transform: translateY(5px);*/
    /*transform: translateY(5px);*/
    /*color: #aaa;*/
    /*font-weight: 300;*/
    /*font-size: 13px;*/
    /*letter-spacing: -0.00933333em;*/
    /*transition: all 0.2s ease-out;*/
  /*}*/
  /*input:placeholder-shown  + label {*/
    /*opacity: 0;*/
    /*-webkit-transform: translateY(15px);*/
    /*transform: translateY(15px);*/
  /*}*/
  /*.login-left img {*/
    /*object-fit: cover;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*display: block;*/
    /*transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);*/
    /*object-position: left;*/
  /*}*/
  /*.open .login-left img {*/
    /*-webkit-transform: translateX(280px) translateZ(0);*/
    /*transform: translateX(280px) translateZ(0);*/
  /*}*/
  /*input[type="checkbox"] {*/
    /*cursor: pointer;*/
    /*margin: 0;*/
    /*height: 22px;*/
    /*position: relative;*/
    /*width: 22px;*/
    /*-webkit-appearance: none;*/
    /*transition: all 180ms linear;*/
  /*}*/
  /*input[type="checkbox"]:before {*/
    /*border: 1px solid #aaa;*/
    /*background-color: #fff;*/
    /*content: '';*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*display: block;*/
    /*border-radius: 2px;*/
    /*transition: all 180ms linear;*/
  /*}*/
  /*input[type="checkbox"]:checked:before {*/
    /*background: #ff666A;*/
    /*border: 1px solid #ff666A;*/
  /*}*/
  /*input[type="checkbox"]:after {*/
    /*content: '';*/
    /*border: 2px solid #fff;*/
    /*border-right: 0;*/
    /*border-top: 0;*/
    /*display: block;*/
    /*height: 4px;*/
    /*left: 4px;*/
    /*opacity: 0;*/
    /*position: absolute;*/
    /*top: 6px;*/
    /*-webkit-transform: rotate(-45deg);*/
    /*transform: rotate(-45deg);*/
    /*width: 12px;*/
    /*transition: all 180ms linear;*/
  /*}*/
  /*input[type="checkbox"]:checked:after {*/
    /*opacity: 1;*/
  /*}*/
  /*.btn {*/
    /*background-color: transparent;*/
    /*border: none;*/
    /*border-radius: 2px;*/
    /*height: 40px;*/
    /*padding: 0 35px;*/
    /*cursor: pointer;*/
    /*font-size: 22px;*/
  /*}*/
</style>
