<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>曲艺</span>
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
                      img:'http://img.kaolafm.net/img/56163665-b1b3-4962-a55a-c3aed6f9e28d/250_250.jpg',
                      font:'岳云鹏孙越相爱相杀'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201412/587045d2-6c68-4ee1-92c4-2088f21b1439/250_250.jpg',
                      font:'马三立相声集（马三立）'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201602/dd47296e-7ef8-433f-9362-721a266a6d10/250_250.jpg',
                      font:'岳云鹏欢乐喜剧人'
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
