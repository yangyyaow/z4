<template>
  <div>
    <div class="tuijian" v-for="item in list">
      <div >
        <div class="tuijian-img">
          <img :src="item.icon|icon" alt="">
        </div>
        <div class="tuijian-news">
          <p>{{item.title}}</p>
          <span><i class="iconfont icon-qiandao-kaoqindaqia"></i>666</span>
        </div>

      </div>

    </div>
  </div>
  </template>



  <script type="text/babel">
import home from '../api/home'
import config from '../config/index'

export default {
  data(){
    return{
      list:[]
    }
  },filters:{
    icon(val){
      if(val){
        return config.SERVICE_STATIC_URL+val
      }else{
        return '/static/images/codeguide.png'
      }

    }
  },
  mounted(){
    home.getNews(data =>{
      console.log('news',data)
      this.list = data
    })
  }

}
</script>
<style>
  .tuijian{
    background-color: white;
    width:100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .tuijian>div{
    padding: 30px;
  }
  .tuijian-img{
    width: 300px;
    float: left;
  }
  .tuijian-news{
    width: 300px;
    float: right;
  }
  .tuijian-news>p{
    font-size: 20px;
  }
  .tuijian-news>span{
    float: right;
    color: silver;

  }
</style>
