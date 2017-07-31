<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>音乐</span>
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
                      img:'http://img.kaolafm.net/mz/images/201701/57570e11-e7e9-441d-96cb-4322690b479d/250_250.jpg',
                      font:'小小宝麻麻'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201603/00553b48-49cd-4188-acf0-b979610214d4/250_250.png',
                      font:'凯叔讲故事'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201609/fb471f22-61da-498d-912d-67f0c109e1cf/250_250.jpg',
                      font:'天鹅阅读网枕边故事'
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
