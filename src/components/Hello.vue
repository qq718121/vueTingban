<template>
  <div class="hello">
    <tishi></tishi>
      <nav>
        <a href="http://localhost:8080/#/hello" class="logo" ><img src="../../static/logo.png" alt=""></a>
        <span class="caidan" @click='isShows'>
          <span class="el-icon-menu"></span>
          <span style="font-size:0.5rem">菜单</span>
        </span>
        <router-link to="/" class="denglu">
            <span class="el-icon-document"></span>
            <span style="font-size:0.5rem">登陆</span>
        </router-link>
      </nav>
    <Caidantab  @iishow="isShows" @chufakaishitadie="kaishitadie"  v-bind:show2="isshow" style="position: fixed;z-index: 9999999"></Caidantab>
    <router-view ref="nidaye" ></router-view>
    <footers style="position: fixed; bottom:0px;"></footers>
  </div>
</template>

<script>

  import Caidantab from '../CaidanTab'
  import tishi from '../tishi'
  import footers from '../footers'
  import axios from 'axios';
export default {
  name: 'Hello',
  data () {
    return {
      isshow:false,
      shouyeArr:[],
    }
  },
  components:{
    Caidantab,
    axios,
    tishi,
    footers,
//    hellow2
  },
  created(){
      let that=this;
      axios.get('http://m.kaolafm.com/webapi/category/list?fid=0').then(function (res) {
        that.shouyeArr.push(res.data.result.dataList)
      },function (err) {
          console.log(err)
      })
  },
  methods:{
    isShows(){
      this.isshow=!this.isshow;
//      this.$refs.nidaye.kaishi();
    },
    kaishitadie(){
        console.log(this.$refs.nidaye.kaishi,this.$refs.nidaye.kaishi);
//        this.$emit('kaishitadie');
      this.$refs.nidaye.kaishi();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .denglu{
    width:10%;
    margin-top:3%;
    text-align: center;
    text-decoration: none;
    color:#e2e2e2;
    display: flex;
    flex-flow: column;
  }
  nav{
    display: flex;
    justify-content: space-around;
    border:1px solid #e2e2e2 ;
    height:51px;
  }
  .caidan{
    margin-top:3%;
    margin-left:23%;
    display: flex;
    flex-flow: column;
    text-align:center;
    width:10%;
    color:#e2e2e2;
  }
  .logo{
    display:block;
    width:30%;
    margin: 2%;
  }
  .logo img {
    width:100%;
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
