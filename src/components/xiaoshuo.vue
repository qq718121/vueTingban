<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>小说</span>
          <span><router-link to="" style="text-decoration: none; color:rgba(0,0,0,0.7);font-size: 0.9rem;float:right;">更多></router-link></span>
        </div>
        <div class="tuijianda">
          <div v-for="i in tuijianArr">
            <router-link to="">
              <span><img :src=i.img alt=""></span>
              <span style="text-align: right;font-size: 0.7rem;color:rgba(0,0,0,0.7);overflow: hidden;display: inline-block;width:100%;text-overflow:ellipsis;white-space: nowrap;overflow: hidden">{{i.font}}</span>
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
                      img:'http://img.kaolafm.net/mz/images/201611/a5684405-72dd-4aee-8ad5-84a22fe4879b/250_250.jpg',
                      font:'陌陌早报'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201612/adf2cd77-7a60-4e69-9a9a-ae271b81fb37/250_250.jpg',
                      font:'野马财经'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201612/043ae45c-c059-4b68-9afe-87e4b60634c5/250_250.jpg',
                      font:'雪球FM'
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
