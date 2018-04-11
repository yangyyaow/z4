<template>
   <div class="">
   <!--标题-->
     <V-Nav></V-Nav>
     <Z-4Silder></Z-4Silder>

     <Z-4App></Z-4App>

     <Z-4TimeLine></Z-4TimeLine>

     <Z-4News></Z-4News>


   </div>
</template>



<script type="text/babel">
  import VNav from '../components/VNav'
  import Z4Silder from '../components/Z4Slider'
  import Z4TimeLine from '../components/Z4TimeLine'
  import Z4News from '../components/Z4News'
  import Z4App from '../components/Z4App'
  export default {
    data(){
      return{

      }
    },
    metods:{
      get(){

      }
    },
    components:{
      VNav,
      Z4Silder,
      Z4TimeLine,
      Z4News,
      Z4App
    }
  }
</script>

<style scoped>
  ul>li{
    list-style: none;
    float: left;
  }
  </style>
