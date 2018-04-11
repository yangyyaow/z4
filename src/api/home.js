import http from './http'

/*
* home接口
* */
const home = {
  getSlider:(fun)=>{
    /*  获取幻灯数据
    * */
    http.get('/swiper',{},data => {
      fun(data)
    })

  },
  getTimeLine:(fun)=>{
    /*获取时间轴*/
    http.get('/zipper',{},data=>{
      console.log(data)
        fun(data)
    })
  },
  getNews:(fun)=>{
    /*获取新闻*/
    http.get('/article',{},data=>{
        fun(data)
    })
  },
}
export default home
