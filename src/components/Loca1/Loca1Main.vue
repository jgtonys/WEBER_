
<template>
    <div class="recommend">
      <h2>추천 전시 정보</h2>
      <div class="row">
      <div class="post">
        <v-carousel hide-delimiters class="carousel-size">
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <router-link :to="poster.to" exact>
              <img :src="poster.src" style="width:100%;height:auto;"/>
              <br>
              <p class="m-1">{{ poster.title }}</p>
            </router-link>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="post">
        <v-carousel hide-delimiters class="carousel-size">
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <a href="`poster.to`">
              <img :src="poster.src" style="width:100%;height:auto;"/>
              <br>
              <p class="m-1">{{ poster.title }}</p>
            </a>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="post">
        <v-carousel hide-delimiters class="carousel-size">
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <a href="poster.to">
              <img :src="poster.src" style="width:100%;height:auto;"/>
              <br>
              <p class="m-1">{{ poster.title }}</p>
            </a>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
</div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      posters_left: [{
          src: '/static/img1.png',
          title: 'img1',
          to: '/loca1/img1'
        },
        {
          src: '/static/img2.png',
          title: 'img2',
          to: '#'
        },
        {
          src: '/static/img3.png',
          title: 'img3',
          to: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

td {
  background-color: none;
}

table {
  width: 100%;
  background-color: none;
  height: 100%;
}

.fullcard {
  height: 100%;
}

#content {
  width: 835px;
  float: left;
}

/*추천 전시 세가지*/
.recommend {
  margin-left: 30px;
  margin-top: 10px;
  height: 100%;
}

.post {
  margin: 10px;
  width: 30%;
}

.fullcard {
  height: 10em;
}

.carousel-size {
  height: 380px !important;
}
</style>
