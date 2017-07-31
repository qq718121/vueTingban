<template>
      <div id="footers">
          <div class="footer">
              <div>
                <img src="http://static.kaolafm.com/kaolafm/m/images/footer_48f53f9ad7319352e832e6a615163344.png" alt="">
              </div>
              <el-button @click="opens">客户端收听</el-button>
          </div>
      </div>
</template>

<script>
      export default {
          name:'footers',
          methods:{
            opens(){
                window.open('https://itunes.apple.com/us/app/kao-lafm-shou-ji-dian-tai/id659345215?ls=1&mt=8',"_self")
            }
          }
      }
</script>

<style>
  .footer{
    width:100%;
    height:50px;
    background: #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
      .footer div{
        width:38%;
        padding-top: 10px;
        padding-left: 3%;
      }
      .footer div img{
        width:100%;
      }
  .footer button{
    background: #f1f1f1;
    height:35px;
    margin-top: 10px;
    margin-right: 10px;
    border:1px solid red;
    color:red;
  }
</style>
