<template>
  <div>
    <!--标题-->
    <V-Nav></V-Nav>

    <div class="daka-input">
      <div>
        <yd-cell-group>

          <yd-cell-item arrow>
            <span slot="left">时间：</span>
            <yd-datetime type="datetime" v-model="form.clock_in_at" slot="right"></yd-datetime>
          </yd-cell-item>

          <yd-cell-item arrow>
            <span slot="left">请输入公里数：</span>
            <yd-input slot="right" required  max="3" v-model="form.km" placeholder="请输入公里数KM"></yd-input>
          </yd-cell-item>

          <yd-cell-item arrow>
            <span slot="left">用时：</span>
            <yd-datetime type="time" v-model="form.time" slot="right"></yd-datetime>
          </yd-cell-item>

          <yd-cell-item arrow>
            <span slot="left">上传图片：</span>
            <span slot="left">
              <div class="upload">
                <File-Upload ref="upload" @input-file="inputFile" :post-action="postAction">
                   <img :src=src alt="" class="upload-img">
                </File-Upload>

              </div>
            </span>
          </yd-cell-item>
          <div class="but">
            <yd-button size="large" type="warning" @click.native="add">提交打卡</yd-button>
          </div>
        </yd-cell-group>
      </div>
    </div>
    <C-lockList></C-lockList>

  </div>
</template>

<script type="text/babel">
  import VNav from '../components/VNav'
  import FileUpload from 'vue-upload-component'
  import  config from '../config/index'
  import clock_in from '../api/clock_in'
  import CLockList from '../components/ClockList'

  export default {
    data(){
      return{
        form:{
          clock_in_at:'2017-05-11 06:06',
          km:'',
          time:'00:00',
          img:''
        },
        src:'/static/images/ifle.jpg',
        postAction:config.UPLOAD_URL,
      }
    },
    methods:{
      add(){
      //   打卡 提交
        clock_in.add(this.form)
      },
      inputFile(newFile, oldFile){
        //上传文件
        this.$refs.upload.active = true;

        //验证上传完成
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // 获得结果
          let data = newFile.response;
          console.log(data)
          if (data.status == "success")  {
            this.src = config.SERVICE_STATIC_URL+data.result.path;
            this.form.img = data.result.path
          }
        }
      }
    },
    components:{
      VNav,
      FileUpload,
      CLockList
    },
    mounted(){
      this.form.clock_in_at='';
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
       if(month < 10){
         month = '0'+month
       }
      let day = date.getDate();
      if(day < 10){
        day = '0'+day
      }
      let h = date.getHours();
      if(h < 10){
        h = '0'+h
      }
      let m =date.getMinutes();
      if(m<10){
        m = '0'+m
      }
      let mydate = year+'-'+month+'-'+day+' ';
      mydate+=h+':'+m;
      console.log(h)
      this.form.clock_in_at = mydate;
    }
  }

  function viewImg(file) {
    var div = document.getElementById('view');
    console.log(file.files);
    var fileRrader = new FileReader();
    if(file.files && file.files[0]){
      fileRrader.readAsDataURL(file.files[0]);
      fileRrader.onload = function (ev) {
        div.innerHTML = "<img src='"+ev.target.result+"'>";
      }
    }
  }

</script>
<style>
  .daka-input{
    width: 100%;
    background-color: white;
    padding: 20px ;
    overflow: hidden;
  }
  .daka-input>div{
    font-size: 35px;
    border-bottom: 1px solid silver;
    line-height: 80px;
  }
  .daka-input>div>input{
    border: none;
    width: 85%;
  }
  #view img{
    width: 100%;
  }

  .upload{
    padding: 20px;
    width: 200px;
    height: 250px;
    margin: auto;
    padding-left: 160px;
  }

  .upload>img{
    width: 100px;
    height: 100px;
  }
  .but{
    padding: 0px 20px 0px 20px ;
  }
  .upload-img{
    width: 200px;
    height: 200px;
  }
</style>
