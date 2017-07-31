<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>情感</span>
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
                      img:'http://img.kaolafm.net/mz/images/201608/b135e537-a089-4567-abc9-40edbc70eecb/250_250.jpg',
                      font:'都市逍遥修神'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201608/8f4dd74c-da39-4c11-aa50-3ab536d18044/250_250.jpg',
                      font:'尸姐'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201608/0676ffc5-6530-4c6f-8cf4-be6ad760a5e2/250_250.jpg',
                      font:'妃常攻略，我为王爷洗战袍'
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
