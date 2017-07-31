<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>特别推荐</span>
        </div>
        <div class="tuijianda">
          <div v-for="i in tuijianArr">
            <router-link to="">
              <span><img :src=i.img alt=""></span>
              <span style="text-align: right;font-size: 0.7rem;color:rgba(0,0,0,0.7)">{{i.font}}</span>
            </router-link>


          </div>
        </div>
      </div>
</template>

<script>
      export default{
          name:'tebietuijian',
          data(){
              return {
                tuijianArr:[
                  {
                      img:'http://img.kaolafm.net/mz/images/201608/14319c28-8c02-4700-8361-4379a27a458e/250_250.jpg',
                      font:'小船说'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201401/e26b3ef1-5a54-418d-9e95-e1e44360bc3d/250_250.jpg',
                      font:'臣妾做不到'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201704/4aab101f-aed1-4f2c-ace2-0743e4eac905/250_250.jpg',
                      font:'尚德读书会'
                  }
                ]
              }
          }
      }
</script>

<style>
  .tuijianda{
    width:90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
  .tuijianda div{
    width:30%;
  }
  .tuijianda div img{
    width:100%;
  }
.tuijian{
  border-bottom: 1px solid #e2e2e2;
  width:90%;
  margin: auto;
  padding:3%;
}
.tuijian span:nth-child(1){
  color:rgba(255,0,0,0.5);
  margin-right: 2%;

}
.tuijian span:nth-child(2){
  color:rgba(0,0,0,0.5);
  font-size:0.9rem;

}
</style>
