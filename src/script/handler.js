var contents = new Vue({
  el: '#con',
  data: {
    location: 0,
    location_list: locationList,
    week: gwacheonData,
    recommend: gwacheonRecommend,
    contentDetail: false,
    detail: detailStructure
  },
  methods: {
    changeMenu(n) {
      this.location = n;
      switch(n) {
        case 0: this.week = gwacheonData; break;
        case 1: this.week = deoksugungData; break;
        case 2: this.week = seoulData; break;
        case 3: this.week = cheongjuData; break;
        default: break;
      }
      this.contentDetail = false;
    },
    showDetail(obj) {
      console.log(obj);
      this.detail = obj;
      this.contentDetail = true;
    }
  }
})

function menuSelect(n) {
  contents.changeMenu(n);
}
