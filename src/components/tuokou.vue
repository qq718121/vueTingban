<template>
      <div id="tebietuijian">
        <div class="tuijian">
          <span class="el-icon-star-on"></span><span>脱口秀</span>
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
                      img:'http://img.kaolafm.net/mz/images/201510/79de75a0-c9fc-4d90-968d-e44acf139a9e/250_250.jpg',
                      font:'二货一箩筐'
                  },

                  {
                      img:'http://img.kaolafm.net/mz/images/201409/cb7811b5-1b0b-4307-a535-ac90c4abb9ea/250_250.jpg',
                      font:'不亦乐乎'
                  },
                  {
                      img:'http://img.kaolafm.net/mz/images/201507/486b40bc-3998-45ba-bfda-ebda48259ef5/250_250.jpg',
                      font:'我乐个去'
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
