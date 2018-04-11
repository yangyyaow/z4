<template>
  <div>
    <!--标题-->
    <V-Nav></V-Nav>

    <div class="personal-header">
      <div>
        <i class="iconfont icon-xiugai xiugai"></i>
    </div>
      <div class="touxiang">
        <img src="../../static/images/56143213.jpg" alt="">
      </div>
      <div class="message">
            <p>李男跑跑</p>
        <p>生命不在于长而在于好，只要每一次尽力演示都值得鼓励与喝彩。</p>
     <div class="btn">   <yd-button size="large" type="warning" shape="circle" >冲锋队队员</yd-button></div>
      </div>
    </div>
    <div class="imessage">姓名：<span>李楠</span></div>
    <div class="imessage">电话：<span>13811111111</span></div>
    <div class="imessage">昵称：<span>李男跑跑</span></div>
    <div class="imessage">月目标量（公里数）：<span>6公里</span></div>
    <div class="imessage">心情寄语：<span>生命不在于长而在于好，只要每一次尽力演示都值得鼓励与喝彩。</span></div>
    <div class="imessage">是否冲锋队队员：<span>是</span></div>
  </div>
</template>

<script type="text/babel">
  import VNav from '../components/VNav'
  export default {
    data(){
      return{}
    },
    components:{
      VNav,
    }
  }
</script>
<style>
  .personal-header{
    background-image: url("../../static/images/percenbg.jpg");
  }
  .xiugai{
    font-size: 50px;
    color: white;
    float: right;
    padding-top: 30px;
    padding-right: 30px;
  }
  .touxiang{
      width: 200px;
      height: 200px;
    margin: auto;
    padding-top: 60px;
  }
  .touxiang>img{
    width:200px;
    height:200px;
    border-radius:50%;
    border:5px solid white;

  }
  .message{
    width: 400px;
    margin: auto;
    margin-top: 80px;
  }
  .message>p{
    text-align: center;
    font-size: 20px;
    color: white;

  }
  .message>p:nth-child(1){
    font-size:30px;
    padding-bottom: 20px;
  }
  .btn{
    width: 200px;
    padding-bottom: 30px;
    margin: auto;
  }
  .imessage{
    width: 100%;
    background-color: white;
    font-size: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
  .imessage>span{
    color: rgb(103,103,103);
    padding-left: 20px;
  }
</style>
