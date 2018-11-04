<template>
  <div class="container">
    <div class="row">
      <div>
        <h1 style="text-align: center;margin-top: 80px">评价模块</h1>
        <div class="row">
          <div class="col-xs-3 col-xs-push-2" style="margin: 20px 0 40px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入房源编号" v-model="hId">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="houseSearch">查询</button>
      </span>
            </div>
          </div>
          <div class="col-xs-3 col-xs-push-2" style="margin: 20px 0 40px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入用户编号" v-model="uId">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="userSearch">查询</button>
      </span>
            </div>
          </div>
          <div class="col-xs-3 col-xs-push-2" style="margin: 20px 0 40px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="查询推荐的评价">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="recommendSearch">查询</button>
      </span>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <tr>
          <th>评价编号</th>
          <th>入住时间</th>
          <th>评价内容</th>
          <th>评价时间</th>
          <th>评分</th>
          <th>用户编号</th>
          <th>订单编号</th>
          <th>房源编号</th>
          <th>是否推荐</th>
        </tr>
        <tbody>
        <tr v-for="(allAssessment,index) in allAssessments">
          <td>{{allAssessment.aId}}</td>
          <td>{{allAssessment.arrvialDate}}</td>
          <td style="width: 300px;">{{allAssessment.aContent}}</td>
          <td>{{allAssessment.aDate}}</td>
          <td>{{allAssessment.aScore}}</td>
          <td>{{allAssessment.uId}}</td>
          <td>{{allAssessment.oId}}</td>
          <td>{{allAssessment.hId}}</td>
          <td>{{allAssessment.recommend}}<el-button type="text" @click="submit(allAssessment.aId);" class="edit">是否推荐</el-button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    name: "AssessmentSelect",
    data(){
      return{
        hId:'',
        uId:'',
        recommend:1,
        allAssessments:'',
      }
    },
    methods:{
      houseSearch:function () {
        this.$axios.get(`/assessment/details/assessment/${this.hId}`).then((result)=>{
          this.allAssessment = result.data.data
          this.allAssessments = this.allAssessment
        })
      },
      userSearch:function () {
          this.$axios.get(`/assessment/personal/userAssessment/${this.uId}`).then((result)=>{
            this.allAssessment = result.data.data
            this.allAssessments = this.allAssessment
            console.log(this.allAssessments)
          })
    },
      recommendSearch:function () {
        this.$axios.get(`assessment/details/recommend/${this.recommend}`).then((result)=>{
          this.allAssessment = result.data.data
          this.allAssessments = this.allAssessment
          console.log(this.allAssessments)
        })
      },
      submit(id) {
        this.$prompt(`确定推荐评价编号为${id}评价`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$axios.post(`/assessment/recommendassessment`,{
            aId: id,
            recommend: value,
          }).then((result)=>{
            this.reload()
            // console.log(this.orders)
          })
          this.$message({
            type: 'success',
            message: '您将是否推荐修改为: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      }
    },
    mounted:function () {
      this.$axios.get("/assessment/personal/allAssessment").then((result)=> {
        this.allAssessments = result.data.data;
      },(err) =>{
      })
    },
  }
</script>

<style scoped>
  .edit{
    margin-left: 10px;
    color: cornflowerblue;
  }
  .edit:hover{
    cursor: pointer;
  }
</style>
