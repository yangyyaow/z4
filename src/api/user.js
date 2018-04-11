import axios from 'axios'
import {Toast} from 'vue-ydui/dist/lib.rem/dialog';
import router from'../router/index'
import config from '../config/index'
import http from './http'
axios.defaults.baseURL = config.API_URL;

const user ={
  //登录
  login:(params)=>{
    http.post('/login',params,data=>{
      if(data == null){
        return;
      };
      if(data.status == true){
        localStorage.setItem('token',data.data.token);
        Toast({
          mes:data.msg,
          timeout:2000,
          icon:'success',
          callback:()=>{
                    router.push({path:'/'})
                  }
        })
      }else {
        Toast({
          mes:data.msg,
          timeout:2000,
          icon:'error',
        })
      }
    });
    // axios.post('/login',params).then(res=>{
    //   let data = res.data
    //   if(data.status== true){
    //     Toast({
    //       mes: data.msg,
    //       timeout: 1000,
    //       icon: 'success',
    //       callback:()=>{
    //         router.push({path:'/'})
    //       }
    //     })
    //   }else {
    //     Toast({
    //       mes: data.msg,
    //       timeout: 1000,
    //       icon: 'err',
    //     })
    //   }
    //   console.log(data)
    // }).catch(err=>{
    //   console.log(err)
    // })
},
  //注册
  register:(params)=>{
    axios.post('/register',params).then(res=>{

      let data = res.data;
      if (data.status == true){
        Toast({
          mes: data.msg,
          timeout: 1000,
          icon: 'success',
          callback:()=>{
            router.push({path:'login'})
          }
        });
      }else{
        Toast({
          mes: data.msg,
          timeout: 1000,
          icon: 'error'});
      }
      console.log(res);

    }).catch(err=>{
      console.log(err)
    })

  },
  //获取总公里排行榜
  getKm:()=>{

}
}

export default user;

