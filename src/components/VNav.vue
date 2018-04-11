<template>
  <div class="header">
    <ul>
      <li class="header_name">

        <router-link to="/"> 征4</router-link>
      </li>
      <li>工商大道第四届中国经营者戈壁远征</li>
      <li>
        <router-link to="/personal">个人信息</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default {

  }
</script>

<style>
  ul>li{
    list-style: none;
    float: left;
  }
  .header{
    width: 100%;
    background-color: rgb(131,28,31);
  }
  .header>ul{
    overflow: hidden;
  }

  .header>ul>li{
    line-height: 80px;
    margin-left: 10px;
    color: white;
  }
  .header_name{
    font-size: 60px;
    font-family: 	KaiTi;
  }
  .header>ul>li:nth-child(2){
    font-size: 20px;
  }
  .header>ul>li:nth-child(3){
    float: right;
    margin-right: 20px;
    font-size: 30px;
  }
</style>
