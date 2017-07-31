<template>
  <div class="hello">
    <router-link to="/" class="tabLoad">
        <div class="tabLoadNum" v-for="t in caibtArr[0]">
          <img :src=t.pic alt="">
          <span>{{t.albumName}}</span>
        </div>
    </router-link>
    <!--{{urlId}}-->
    <!--<caidantuodong :caidanbtArr="caidanbtArr"></caidantuodong>-->
    <!--<router-view></router-view>-->
    <!--<el-button class="jiazaigengduo">加载更多</el-button>-->
  </div>
</template>

<script>

  import axios from 'axios';
  import caidantuodong from './caidantuodong';
  export default {
    name: 'hello',
    data () {
      return {
        caibtArr:this.tabArrnum
      }
    },
//  watch:{
//    urlId(v){
//        alert(v)
//    }
//  },
    components:{


    },

    created(){
        console.log(this.tabArrnum)
    },
    methods:{

    },
  props:['tabArrnum'],

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabLoadNum{
    width:25%;
    margin: 10px;
  }
  .tabLoadNum img{
    width:100%;

  }
  .tabLoad span{
    overflow: hidden;
    display: inline-block;width:100%;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .tabLoad{
    display: inline-block;
    width:94%;
    /*margin-top: 20px;*/
    margin: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
  /*.jiazaigengduo{*/
    /*width:40%;*/
    /*margin:20px auto 20px;*/
    /*margin-left: 31%;*/
    /*border: 1px solid rgba(255,0,0,0.6);*/
    /*color:rgba(255,0,0,0.6);*/
  /*}*/
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
    color: #000;
  }
</style>
