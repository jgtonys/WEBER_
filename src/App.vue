<template>
<div id="app">
  <div id="header">
    <main-header />
  </div>

  <div id="nav">
    <v-tabs fixed-tabs v-model="active" slider-color="blue">
      <v-tab v-for="location in locations" :key="location.value" :to="location.to" ripple>
        {{ location.value }}
      </v-tab>
    </v-tabs>
  </div>

  <div id="wrap">
    <router-view />
    <div id="banner">
      <div class="newsletter">
        <p class="email"><i class="far fa-envelope"></i>뉴스레터</p>
        <form>
                <input type="text" placeholder="이메일을 입력해주세요.">
                <input type="submit" value="구독하기">
        </form>
      </div>

      <hr>
      <div class="sns">
        <a href="https://www.facebook.com/mmcakorea/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.twitter.com/mmcakorea" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/mmcakorea/" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
      <hr>
      <div class="player">
        <video src="./assets/video.mp4" width="290px" height="180px" controls></video>
      </div>
      <hr>
      <div>
        빈공간은 gif 이미지 넣을 예정
      </div>
    </div>
  </div>

  <div id="footer">
    <main-footer />
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Header from './components/semantic/Header.vue'
import Footer from './components/semantic/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'App',
  components: {
    'main-header': Header,
    'main-footer': Footer
  },
  data () {
    return {
      locations: [{
        value: '과천',
        to: '/loca1/main'
      },
      {
        value: '경복궁',
        to: '/loca2/main'
      },
      {
        value: '서울',
        to: '/loca3/main'
      },
      {
        value: '경주',
        to: '/loca4/main'
      }],
      active: null
    }
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  overflow: hidden;
  width: 1200px;
}

/* /////// 네비게이션 /////// */

#wrap {
  /*컨텐트와 배너를 감싸는 태그*/
  width: 1180px;
  overflow: hidden;
}

/* /////// 배너 /////// */
#banner {
  width: 300px;
  float: left;
}

/*뉴스레터 받아보기*/
.newsletter {
  margin: 30px 0;
}

.email {
  color: black;
  margin: 10px;
  font-size: 30px;
}

/*이미지에 SNS링크걸어둠*/
.sns {
  margin: 30px 0;
}

.sns a {
  margin: 10px;
  color: black;
  line-height: 50px;
  font-size: 50px;
}

/*미술관 홍보동영상*/
.player {
  margin: 30px 0;
}

input[type=text] {
    width: 150px;
    margin: 10px 0 10px 5px;
    border-radius: 25px 0 0 25px;
    padding: 5px;
}

input[type=submit] {
    width: 70px;
    margin: 10px 5px 10px 0;
    border-radius: 0 25px 25px 0;
    padding: 5px;
}

</style>
