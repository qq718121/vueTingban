<template>
  <div class="hello">
    <tuodong></tuodong>
    <huadong></huadong>
    <tebietuijian></tebietuijian>
    <music></music>
    <xinwen></xinwen>
    <guangbo></guangbo>
    <tuokou></tuokou>
    <qinggan></qinggan>
    <xiaoshuo></xiaoshuo>
    <quyi></quyi>
    <footers></footers>
  </div>
</template>

<script>
  import huadong from './huadongdh'
  import tuodong from './tuodong'
  import axios from 'axios';
  import tebietuijian from './tebietuijian'
  import music from './music'

  import xinwen from './xinwen'
  import guangbo from './guangbo'
  import tuokou from './tuokou'
  import qinggan from './qinggan'
  import xiaoshuo from './xiaoshuo'
  import quyi from './quyi'
export default {
  name: 'hello',
  data () {
    return {
      isshow:false,
      shouyeArr:[]
    }
  },
  components:{
    axios,
    huadong,
    tuodong,
    tebietuijian,
    music,
    xinwen,
    guangbo,
    tuokou,
    qinggan,
    xiaoshuo,
    quyi
  },
  created(){
      let that=this;
      axios.get('http://m.kaolafm.com/webapi/category/list?fid=0').then(function (res) {
        that.shouyeArr.push(res.data.result.dataList)
      },function (err) {
          console.log(err)
      })
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
