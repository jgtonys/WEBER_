
<template>
<div class="post-detail">
  <div class="post-img">
    <v-card>
      <h2 class="p-3">불온한 데이터(작품명)</h2>
      <img :src="this.src" width="350px" height="500px"><br>
    </v-card>
  </div>
  <div class="post-content">
    <v-card>

      <p>기간</p>
      <p>작가</p>
      <p>작품수</p>
      <p>관람료</p>
      <p>주최/후훤</p>
      <p>내용 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ </p>
      <br>
      <form>
        <input type="button" value="예약하기">
      </form>
    </v-card>
  </div>
</div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      src: '/static/' + this.$route.params.id + '.png'
    }
  }
}
</script>

<style scoped>
/*전시 클릭하면 전시정보 자세히 나옴*/
.post-detail {
  margin-left: 50px;
  overflow: hidden;
}

.post-img {
  margin: 10px;
  float: left;
}

.post-content {
  margin: 10px;
  padding: 80px 0 0 0;
  float: left;
  text-align: start;
  width: 360px;
}
</style>
