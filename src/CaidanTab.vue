<template>
  <div>
      <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" style="position: fixed;top: 53px;" class="caidanT">
          <router-link :to="'/caidanRouter/'+shouyArr[key].id"  class="tiaozhuan" v-for="(value,key) in shouyArr" >
          <span @click="iishow"> {{value.text}}</span>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name:'Caidantab',
    props:['show2'],
    data(){
        return {
          shouyArr:[
              {text:"首页",id:0}, {text:"智能电台",id:-1}, {text:"精品",id:1339}, {text:"搞笑",id:648}, {text:"小说",id:32},
              {text:"王牌脱口秀",id:1331}, {text:"相声评书",id:114}, {text:"经典典藏",id:1393}, {text:"亲子",id:201}, {text:"名人",id:1001},
              {text:"电影",id:2296}, {text:"旅游",id:1338}, {text:"综艺娱乐",id:12}, {text:"恐怖故事",id:664}, {text:"历史人文",id:657},
              {text:"财经",id:655}, {text:"广播剧",id:819}, {text:"讲座讲台",id:818}, {text:"外语",id:820}, {text:"星座风水",id:195},
              {text:"科技",id:656}, {text:"汽车",id:662}, {text:"生活",id:21}, {text:"体育",id:18}, {text:"健康",id:1241},
              {text:"教育",id:1}, {text:"军事",id:1165}, {text:"动漫游戏",id:1251}, {text:"校园",id:1242}
          ]
        }
    },
    methods:{
      iishow(){
        this.$emit('chufakaishitadie');
        this.$emit('iishow');
      }
    }
  }
</script>

<style>
  .caidanT .tiaozhuan:nth-child(1) span{
    color:red;
  }
  .tiaozhuan{
    text-align: center;
    display: inline-block;
    width:32.8%;
    background: #fff;
    height:40px;
    text-decoration: none;
    color:#000;
    border: 1px solid #e2e2e2;
    font-size: 0.2rem;
    justify-content: center;
    line-height: 40px;
  }
  element.style {
    display: flex;
    margin-top: 0px;
    height: 100px;
  }
</style>
