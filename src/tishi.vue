<template>
  <div id="tishi">
    <el-alert class="el"
              title=""
              type="info"
              close-text="关闭" style="background: #e0e0e0;">
      <div class="gudingTopLeft">
        <span>下载考拉FM客户端</span>
        <span>关注喜欢的电台</span>
      </div>
      <el-button @click="xiazai" class="xiazaiBtn">立即下载</el-button>
    </el-alert>
  </div>
</template>
<script>
  export default {
    name: 'tishi',
    methods:{
      xiazai(){
        window.open('https://itunes.apple.com/us/app/kao-lafm-shou-ji-dian-tai/id659345215?ls=1&mt=8',"_self")
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding:0;
  }
  .gudingTopLeft{
    width:50%;
    margin: 0;
    display:flex;
    flex-flow: column;
    float:left;
  }
  .gudingTopLeft span:nth-child(1){
    font-size:0.9rem;
    color:#000;
    font-weight: 600;
  }
  .gudingTopLeft span:nth-child(2){
    font-size:0.5rem;
    color:darkgray;
  }

  .xiazaiBtn{
    border:1px red solid;
    color:red;
  }
</style>
