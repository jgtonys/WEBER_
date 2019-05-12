
<template>
  <div id="content" class="p-1 m-1">
    <div class="m-4">
      <table class="p-3">
        <tr>
          <th>일</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
          <th>토</th>
        </tr>
        <tr>
          <td>
            <div class="card pt-3 fullcard">
              <p>4번</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
          <td>
            <div class="card pt-3 fullcard">
              <p>공연1</p>
              <p>공연2</p>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="recommend">
      <h2>추천 전시 정보</h2>
      <div class="row">
      <div class="post">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <img :src="poster.src" style="width:100%;height:auto;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="post">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <img :src="poster.src" style="width:100%;height:auto;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="post">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(poster,i) in posters_left" :key="i">
            <img :src="poster.src" style="width:100%;height:auto;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
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
          src: '/static/img1.png'
        },
        {
          src: '/static/img2.png'
        },
        {
          src: '/static/img3.png'
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
</style>
