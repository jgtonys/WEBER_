<template>
  <!--
  <footer>
    <p>대표자명 윤범모 사업자등록번호 138-83-00313</p>
    <p>Copyright (c)2018 National Museum of Modern and Contemporary Art, Korea All rights reserved.</p>
    <p>대표전화 | (과천) 02-2188-6000, (서울) 02-3701-9500, (덕수궁) 02-2022-0600, (청주) 043-261-1400</p>
    <p>Copyright ⓒ 2019 WEBER</p>
  </footer>-->

  <v-footer
    dark
    height="auto"
    class="mt-5"
  >
    <v-card
      flat
      tile
      class="text-xs-center"
      style="width:100%;"
    >

      <v-card-text class="white--text mt-2 pb-0">
        <p>대표자명 윤범모 사업자등록번호 138-83-00313</p>
        <p>Copyright (c)2018 National Museum of Modern and Contemporary Art, Korea All rights reserved.</p>
        <p>대표전화 | (과천) 02-2188-6000, (서울) 02-3701-9500, (덕수궁) 02-2022-0600, (청주) 043-261-1400</p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text pt-0">
        Copyright &copy;2019 <strong>WEBER</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      msg: 'blabla'
    }
  }
}
</script>

<style scoped>
v-footer {
  background-color: none;
}
</style>
