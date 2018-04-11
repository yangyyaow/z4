import axios from 'axios'
import config from '../config/index'
import router from  '../router/index'
import {Toast,Loading} from "vue-ydui/dist/lib.rem/dialog/index";

axios.defaults.baseURL = config.API_URL

//请求前拦截
axios.interceptors.request.use(config =>{
  Loading.open('正在加载...')
  let token = localStorage.getItem('token');
  if(token){
    config.url +='?token='+token;
  }
  return config
},error => {
  return Promise.reject(error)
})

//请求返回拦截
axios.interceptors.response.use(response=>{
 Loading.close();
 if(response.data.status == false){
   if(typeof response.data.code != 'undefined'){
     if(response.data.code == '401'){
       router.push({path:'login'})
     }
   }
 }
  return response;
},error => {
  return Promise.reject(error)
})

const http ={
  get:(url,params,fun)=>{

    axios.get(url,{params:params}).then(res=>{
      console.log('------------------------------------------')
          fun(res.data)
    }).catch(err=>{
      fun(null);
      Toast({
        mes:"网络请求异常",
        timeout:2000,
        icon:'error',
        callback:({path:'/'})
      });
    console.log(err)
    })
  },
  post:(url,params,fun)=>{

    axios.post(url,params).then(res =>{
      fun(res.data)
    }).catch(err=>{
      fun(null);
      Toast({
        mes:"网络请求异常",
        timeout:2000,
        icon:'error',
        callback:({path:'/'})
      });
      console.log(err)
    })

  }
}

export default http
