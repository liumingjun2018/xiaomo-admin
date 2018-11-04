<template>
      <div class="row">
        <h1 style="text-align: center;margin-top: 80px">订单模块</h1>
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
              <th>订单编号</th>
              <th>入住时间</th>
              <th>离开时间</th>
              <th>价格</th>
              <th>下单时间</th>
              <th>订单状态</th>
              <th>用户编号</th>
              <th>房源编号</th>
            </tr>
            <tbody>
            <tr v-for="(order,index) in orders">
              <td>{{order.oId}}</td>
              <td>{{order.arrvialDate}}</td>
              <td>{{order.leaveDate}}</td>
              <td>{{order.hPrice}}</td>
              <td>{{order.oDate}}</td>
              <td>{{order.oStatus}}<el-button type="text" v-if="order.oStatus==1" @click="submit(order.oId);" class="edit">编辑</el-button></td>
              <td>{{order.uId}}</td>
              <td>{{order.hId}}</td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
    export default {
      inject:['reload'],
      name: "OrderSelect",
      data(){
          return{
            orders:[],
            userPhone:'',
            uId:'',
            userOrder:'',
            editIndex:''
          }
      },
      methods:{
        search:function () {
          this.$axios.get(`/userorderdis/checkphone/${this.userPhone}`).then((result)=>{
            this.uId = result.data.data[0].uId
            console.log(this.uId)
            this.$axios.post(`/order/getallorder/${this.uId}`).then((result)=>{
              this.userOrder = result.data.data
              this.orders = this.userOrder
              console.log(this.orders)
            })
          })
        },
          submit(id) {
            this.$prompt(`确定修改订单编号为${id}订单状态`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
            }).then(({ value }) => {
              this.$axios.post(`/order/updateorder`,{
                oId: id,
                oStatus: value,
              }).then((result)=>{
                this.reload()
              })
              this.$message({
                type: 'success',
                message: '您修改的订单状态为: ' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消输入'
              });
            });
}
},
      mounted:function () {
        this.$axios.get("/order/admingetallorder").then((result)=> {
          this.orders = result.data.data;
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
