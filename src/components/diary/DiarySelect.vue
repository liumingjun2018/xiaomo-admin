<template>
        <div class="row">
          <div class="col-xs-3 col-xs-push-2" style="margin: 100px 0 20px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入房源编号" v-model="hId">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="houseSearch">查询</button>
      </span>
            </div>
          </div>
          <div class="col-xs-3 col-xs-push-2" style="margin: 100px 0 20px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入用户编号" v-model="uId">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="userSearch">查询</button>
      </span>
            </div>
          </div>
          <div class="col-xs-3 col-xs-push-2" style="margin: 100px 0 20px">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="查询推荐的评价">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="recommendSearch">查询</button>
      </span>
            </div>
          </div>

      <table class="table table-striped">
        <tr>
          <th>日记编号</th>
          <th>入住时间</th>
          <th>日记内容</th>
          <th>日记时间</th>
          <th>用户编号</th>
          <th>房源编号</th>
          <th>是否推荐</th>
          <th>日记标题</th>
        </tr>
        <tbody>
        <tr v-for="(allDiary,index) in allDiarys">
          <td>{{allDiary.dId}}</td>
          <td>{{allDiary.arrvialDate}}</td>
          <td style="width: 500px;">{{allDiary.dContent}}</td>
          <td>{{allDiary.dDate}}</td>
          <td>{{allDiary.uId}}</td>
          <td>{{allDiary.hId}}</td>
          <td>{{allDiary.recommend}}<el-button type="text" @click="submit(index)" class="edit">是否推荐</el-button></td>
          <td>{{allDiary.dTitle}}</td>
        </tr>
        </tbody>
      </table>
        </div>
</template>

<script>
  export default {
    name: "AssessmentSelect",
    data(){
      return{
        hId:'',
        uId:'',
        recommend:1,
        allDiarys:'',
      }
    },
    methods:{
      houseSearch:function () {
        this.$axios.get(`/diarys/hdiarys/${this.hId}`).then((result)=>{
          this.allDiary = result.data.data
          this.allDiarys = this.allDiary
        })
      },
      userSearch:function () {
        this.$axios.get(`/diarys/udiarys/${this.uId}`).then((result)=>{
          this.allDiary = result.data.data
          this.allDiarys = this.allDiary
          console.log(this.allDiarys)
        })
      },
      recommendSearch:function () {
        this.$axios.get(`/diarys/${this.recommend}`).then((result)=>{
          this.allDiary = result.data.data
          this.allDiarys = this.allDiary
          console.log(this.allDiarys)
        })
      },
      submit(index) {
        this.$prompt(`确定推荐${index+1}日记`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$axios.post(`/diarys/recommenddiary`,{
            dId: index+1,
            recommend: value,
          }).then((result)=>{
            this.$router.go(0)
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
      this.$axios.get("/diarys/alldiarys").then((result)=> {
        this.allDiarys = result.data.data;
      },(err) =>{
      })
    },
    // allDiary.aContent
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
