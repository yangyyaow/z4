<template>
  <div>
    <!--头部-->
    <V-Nav></V-Nav>
    <!--form表单-->
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="but">
      <yd-button size="large" type="primary" @click.native="login">登录</yd-button>
      <yd-button size="large" type="warning" @click.native="register">注册</yd-button>
    </div>
  </div>
</template>

<script>
  import VNav from '../components/VNav'
  import user from '../api/user'

  export default {
    data(){
      return{
        form:{
          phone:'',
          password:''
        }

      }
    },
    components:{
      VNav
    },
    methods:{
    /*
    * 注册跳转
    * */
    register(){
      //路由跳转
      this.$router.push({path:'regisder'})
    },
      login(){
        user.login(this.form)
      }
    }

  }
</script>

<style>
  .but{
    padding: 0px 20px 0px 20px;
  }
</style>
