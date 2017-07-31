<template>
  <div class="hello">
    <!--{{urlId}}-->
    <caidantuodong :caidanbtArr="caidanbtArr"></caidantuodong>
    <router-view :tabArrnum="caidanchanpin"></router-view>
    <el-button class="jiazaigengduo">加载更多</el-button>
  </div>
</template>

<script>

  import axios from 'axios';
  import caidantuodong from './caidantuodong';
export default {
  name: 'hello',
  data () {
    return {
        urlId:this.$route.params.num,
        caidanbtArr:[],
        caidanchanpin:[]
    }
  },
//  watch:{
//    urlId(v){
//        alert(v)
//    }
//  },
  components:{

    caidantuodong
  },
//  $watch:(this.urlId,function () {
//    this.biaotiUrl(this.urlId);
//    this.chanpinUrl(this.urlId);
//  },
//  $watch:{
//    urlId (to, from,data) {
//      // 获取最新的id 调用获取数据方法
//      alert(data)
//    }
//  },
  created(){
//    this.urlId=this.$route.params.num;
//    this.biaotiUrl(this.urlId);
//    this.chanpinUrl(this.urlId);
    this.kaishi();
  },
  methods:{
    kaishi(){
      this.urlId=this.$route.params.num;
      this.biaotiUrl(this.urlId);
      this.chanpinUrl(this.urlId);
    },
    biaotiUrl(url){
      let _this=this;
      axios.get('http://m.kaolafm.com/webapi/resource/search?cid='+url+'&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=18&pagenum=1').then(function (res) {
//        that.shouyeArr.push(res.data.result.dataList)
//        console.log(res.data.result.dataList)
        if(_this.caidanchanpin.length!==0){
          _this.caidanchanpin.length=0;
        }
        _this.caidanchanpin.push(res.data.result.dataList);

      },function (err) {
        console.log(err)
      })
    },
    chanpinUrl(url){
      let _this=this;
      axios.get('http://m.kaolafm.com/webapi/category/list?fid='+url).then(function (res) {
//        that.shouyeArr.push(res.data.result.dataList)
//        console.log(res.data.result.dataList);
        if(_this.caidanbtArr.length!==0){
          _this.caidanbtArr.length=0;
        }
        _this.caidanbtArr.push(res.data.result.dataList);
      },function (err) {
        console.log(err)
      })
    }
  },
//  props:['caidanbtArr'],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jiazaigengduo{
  width:40%;
 margin:20px auto 20px;
  margin-left: 31%;
  border: 1px solid rgba(255,0,0,0.6);
  color:rgba(255,0,0,0.6);
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
